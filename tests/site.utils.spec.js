/*

export const formatContact = (contact) => {
  if (!contact) {
    return "";
  }
  const { firstName, lastName } = contact;

  return `${firstName} ${lastName}`;
};*/

import {
  formatAddress,
  formatContact,
  getMainContact,
} from "../src/util/site.utils";

describe("Site Utils", () => {
  describe("formatAddress method", () => {
    it("should format the address properly", () => {
      const tests = [
        {
          input: {
            city: "city",
            country: "country",
            state: "state",
            street: "street",
            zipCode: "zipCode",
          },
          output: "city, country, state, street, zipCode",
        },
        {
          input: {
            city: "city",
            country: "country",
            state: "state",
            street: "street",
          },
          output: "city, country, state, street",
        },
        {
          input: {
            city: "city",
            country: "country",
            state: "state",
          },
          output: "city, country, state",
        },
        {
          input: {
            city: "city",
            country: "country",
          },
          output: "city, country",
        },
        {
          input: {
            city: "city",
          },
          output: "city",
        },
        {
          input: {},
          output: "",
        },
      ];

      tests.forEach((test) => {
        expect(formatAddress(test.input)).toEqual(test.output);
      });
    });
  });

  describe("getMainContact method", () => {
    it("should return the main contact", () => {
      const tests = [
        {
          input: null,
          output: {},
        },
        {
          input: { main: "main contact" },
          output: "main contact",
        },
      ];

      tests.forEach((test) => {
        expect(getMainContact(test.input)).toEqual(test.output);
      });
    });
  });

  describe("formatContact method", () => {
    it("should format contact properly", () => {
      const tests = [
        {
          input: null,
          output: "",
        },
        {
          input: { firstName: "firstName", lastName: "lastName" },
          output: "firstName lastName",
        },
        {
          input: { firstName: "firstName" },
          output: "firstName",
        },
        {
          input: { lastName: "lastName" },
          output: "lastName",
        },
      ];

      tests.forEach((test) => {
        expect(formatContact(test.input)).toEqual(test.output);
      });
    });
  });
});
