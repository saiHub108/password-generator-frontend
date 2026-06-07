import { useState } from "react";
import { CHAR_SETS } from "../lib/charSets.js";
import { generatePassword } from "../lib/generatePassword.js";

export default function PasswordGenerator() {
  // ── State: the user's choices and the result ────────────────────
  // Each piece of UI that changes lives in state. React re-renders
  // automatically whenever you call one of these setters.
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    lower: true, upper: true, digits: true, symbols: true,
  });
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Flip a single checkbox without mutating state directly:
  // we build a NEW object from the previous one.
  const toggleOption = (key) =>
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));

  // Runs when the user clicks "Generate".
  const handleGenerate = () => {
    setError("");
    try {
      setPassword(generatePassword(length, options));
    } catch (e) {
      setPassword("");
      setError(e.message);
    }
  };

  const handleCopy = () => {
    if (password) navigator.clipboard.writeText(password);
  };

  // ── UI ──────────────────────────────────────────────────────────
  return (
    <div>
      <div>
        <label>
          Length: {length}
          <input
            type="range"
            min="4"
            max="64"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>
      </div>

      {/* One checkbox per character set. We map over the KEYS of
          CHAR_SETS, so adding a new set in charSets.js needs zero
          changes here. */}
      {Object.keys(CHAR_SETS).map((key) => (
        <label key={key}>
          <input
            type="checkbox"
            checked={options[key]}
            onChange={() => toggleOption(key)}
          />{" "}
          {key}
        </label>
      ))}

      <button onClick={handleGenerate}>Generate</button>

      {error && <p className="error">{error}</p>}

      <p className="password-output">{password}</p>
      {password && <button onClick={handleCopy}>Copy</button>}
    </div>
  );
}
