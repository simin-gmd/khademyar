export default defineEventHandler(async (event) => {
  setCookie(event, "refreshToken", "", {
    expires: new Date(),
  });
  setCookie(event, "selectedRole", "", {
    expires: new Date(),
  });
  return true
});
