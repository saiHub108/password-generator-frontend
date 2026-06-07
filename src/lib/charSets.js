// The pools of characters the generator can draw from.
// The KEYS here ("lower", "upper", ...) must match the option
// keys used in the UI checkboxes. Add a set here and the UI
// picks it up automatically.
export const CHAR_SETS = {
  lower:   "abcdefghijklmnopqrstuvwxyz",
  upper:   "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  digits:  "0123456789",
  symbols: "!@#$%^&*()-_=+[]{};:,.<>?",
};
