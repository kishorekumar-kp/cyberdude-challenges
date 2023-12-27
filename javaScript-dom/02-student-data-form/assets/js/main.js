import JustValidate from "just-validate";

const formEl = document.getElementById("pickupForm");

const validator = new JustValidate(formEl);

validator.addField(
  "#name",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 20,
    },
  ],
  {
    errorLabelCssClass: ["error"],
  }
);

validator.addField(
  "#number",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "minLength",
      value: 10,
    },
    {
      rule: "maxLength",
      value: 10,
    },
  ],
  {
    errorLabelCssClass: ["error"],
  }
);

validator.addField(
  "#date",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["error"],
  }
);

validator.addField(
  "#email",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["error"],
  }
);

validator.addField(
  "#gender",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["error"],
  }
);

validator.addField(
  "#department",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["error"],
  }
);
