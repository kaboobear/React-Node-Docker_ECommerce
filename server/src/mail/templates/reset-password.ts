export const resetPasswordTemplate = ({
  username,
  link,
}: {
  username: string;
  link: string;
}) => `
<html>
  <head>
      <style></style>
  </head>
  <body>
      <p>Hi ${username},</p>
      <p>You requested to reset your password.</p>
      <p> Please, click the link below to reset your password</p>
      <a href="${link}">Reset Password</a>
  </body>
</html>
`;
