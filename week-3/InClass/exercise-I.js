const messy = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];

  function upper(value) {
      return value.toUpperCase() + "!"

  }
  const cleanmessy = messy.filter(value => typeof value == "string").map(upper);

  console.log(cleanmessy);
