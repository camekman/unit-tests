export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;

  if (type === "string") {
    return stringArrayOrObject === "";
  } else if (type === "object" && stringArrayOrObject.length === 0) {
    return true;
  } else {
    return false;
  }
};

//method object keys ...
