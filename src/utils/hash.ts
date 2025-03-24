import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

/** แฮชรหัสผ่าน */
export const hashPassword = async (passcode_pin: string): Promise<string> => {
  return await bcrypt.hash(passcode_pin, SALT_ROUNDS);
};

/** ตรวจสอบรหัสผ่าน */
export const comparePassword = async (passcode_pin: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(passcode_pin, hashedPassword);
};
