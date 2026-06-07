import { CHAR_SETS } from "./charSets.js";

/**
 * Generate a random password.
 *
 * @param {number}  length          How many characters to produce.
 * @param {Object}  options         Which character sets to include.
 * @param {boolean} options.lower
 * @param {boolean} options.upper
 * @param {boolean} options.digits
 * @param {boolean} options.symbols
 * @returns {string} the generated password
 */
export function generatePassword(length, options) {
  // ───────────────────────────────────────────────────────────────
  // STEP 1: Build the "pool" — one big string containing every
  //         character that is allowed, based on `options`.
  //
  //   Hint: start with an empty string, then for each set append it
  //         when its option is true. For example:
  //             if (options.lower) pool += CHAR_SETS.lower;
  //         ...and repeat for upper, digits, symbols.
  // ───────────────────────────────────────────────────────────────
  let pool = "";
  if (options.lower) pool += CHAR_SETS.lower;
  if(options.upper) pool += CHAR_SETS.upper;
  if (options.digits) pool+= CHAR_SETS.digits;
  if(options.symbols)
  // TODO (Step 1): append the right CHAR_SETS entries to `pool`
  if (options.symbols) pool += CHAR_SETS.symbols;

  // ───────────────────────────────────────────────────────────────
  // STEP 2: If the pool is empty (user unchecked everything),
  //         stop with a clear error.
  //
  //   Hint: if (!pool) throw new Error("Select at least one character set");
  // ───────────────────────────────────────────────────────────────
  // TODO (Step 2): throw when `pool` is empty
  if (!pool) throw new Error("Select at least one character set");  
  // ───────────────────────────────────────────────────────────────
  // STEP 3: Get cryptographically secure random numbers.
  //
  //   const randomValues = new Uint32Array(length);
  //   crypto.getRandomValues(randomValues);
  //
  //   ❗ Do NOT use Math.random() — it is predictable and unsafe
  //      for generating passwords.
  // ───────────────────────────────────────────────────────────────
  // TODO (Step 3): create `randomValues` and fill it with crypto.getRandomValues
const randomValues = new Uint32Array(length);
crypto.getRandomValues(randomValues);
  // ───────────────────────────────────────────────────────────────
  // STEP 4: Convert each random number into a character from the pool.
  //
  //   for i = 0 .. length-1:
  //       index = randomValues[i] % pool.length
  //       append pool[index] to your result string
  // ───────────────────────────────────────────────────────────────
  let password = "";
  // TODO (Step 4): write the loop that builds `password`
  for (let i = 0; i < length; i++) {
      const idx = randomValues[i] % pool.length;
      password += pool[idx];
  }

  return password;
}

/**
 * BONUS (optional): estimate strength as "bits of entropy".
 *   entropy = length * log2(poolSize)
 * Roughly: < 50 weak, 50-80 ok, 80+ strong.
 *
 * @param {number} length    length of the password
 * @param {number} poolSize  number of distinct characters available
 * @returns {number} approximate bits of entropy
 */
export function estimateEntropy(length, poolSize) {
  // TODO (bonus): return length * Math.log2(poolSize)
  return length * Math.log2(poolSize);
  //return 0;
}
