const fields = [
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
    type: "password",
    placeholder: "********",
    icon: "lock-outlined",
    rules: [
      {
        required: true,
        message: "Please input your Password!",
      },
    ],
  },
];

export default fields;
