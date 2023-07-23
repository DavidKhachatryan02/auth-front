const fields = [
  {
    name: "userName",
    label: "Username",
    placeholder: "username",
    icon: "user-outlined",
    rules: [
      {
        required: true,
        message: "Please input your Username!",
      },
    ],
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Email",
    icon: "mail-outlined",
    rules: [
      {
        type: "email",
        required: true,
        message: "Please input your Email!",
      },
    ],
  },
  {
    name: "password",
    label: "Password",
    placeholder: "********",
    type: "password",
    icon: "lock-outlined",
    rules: [
      {
        required: true,
        message: "Please input your Password!",
      },
    ],
  },
  {
    name: "password_confirmation",
    label: "Password confirmation",
    placeholder: "********",
    type: "password",
    icon: "lock-outlined",
    rules: [
      {
        required: true,
        message: "Please input your Password again!",
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject("Passwords do not match!");
        },
      }),
    ],
  },
];

export default fields;
