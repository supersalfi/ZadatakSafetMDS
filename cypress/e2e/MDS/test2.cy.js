import loginPages from "../Helpers/accountHelper";
import deviceHelper from "../Helpers/deviceHelper.js";
import strings from "../../fixtures/strings.js";
let model = strings.randomString(5);
let slug = strings.randomString(7);

describe("example to-do app", () => {
  it("Create new device type", () => {
    cy.visit("/dcim/device-types/add/");
    loginPages.fillLogInForim("admin", "admin");
    deviceHelper.selectManufacturer("Cisco");
    deviceHelper.enterModel(model);
    deviceHelper.enterSlug(slug);
    deviceHelper.selectPlatform("Cisco");
    deviceHelper.enterDescription("test description");
    deviceHelper.selectTags("Golf");
    deviceHelper.defineHeight("2", "True", "False");
    deviceHelper.enterPartNumber("part number");
    // deviceHelper.selectStatus('Parent')
    deviceHelper.selectAirflow("Front to rear");
    deviceHelper.enterWeight(200);
    deviceHelper.weightUnit("Ounces");
    deviceHelper.enterComment("lorem ipsum dolor sil alamet");
    deviceHelper.submitDeviceAndVerifySuccess(model);
  });

  it("Create same device type", () => {
    cy.visit("/dcim/device-types/add/");
    loginPages.fillLogInForim("admin", "admin");
    deviceHelper.selectManufacturer("Cisco");
    deviceHelper.enterModel(model);
    deviceHelper.enterSlug(slug);
    deviceHelper.selectPlatform("Cisco");
    deviceHelper.enterDescription("test description");
    deviceHelper.selectTags("Golf");
    deviceHelper.defineHeight("2", "True", "False");
    deviceHelper.enterPartNumber("part number");
    // deviceHelper.selectStatus('Parent')
    deviceHelper.selectAirflow("Front to rear");
    deviceHelper.enterWeight(200);
    deviceHelper.weightUnit("Ounces");
    deviceHelper.enterComment("lorem ipsum dolor sil alamet");
    deviceHelper.submitDeviceAndVerifyInvalidEntry();
  });

  it("Create device with same model but different slug", () => {
    slug = strings.randomString(7);

    cy.visit("/dcim/device-types/add/");
    loginPages.fillLogInForim("admin", "admin");
    deviceHelper.selectManufacturer("Cisco");
    deviceHelper.enterModel(model);
    deviceHelper.enterSlug(slug);
    deviceHelper.selectPlatform("Cisco");
    deviceHelper.enterDescription("test description");
    deviceHelper.selectTags("Golf");
    deviceHelper.defineHeight("2", "True", "False");
    deviceHelper.enterPartNumber("part number");
    // deviceHelper.selectStatus('Parent')
    deviceHelper.selectAirflow("Front to rear");
    deviceHelper.enterWeight(200);
    deviceHelper.weightUnit("Ounces");
    deviceHelper.enterComment("lorem ipsum dolor sil alamet");
    deviceHelper.submitDeviceAndVerifyInvalidEntry();
  });

  it("Create device with same slug ", () => {
    
    slug = strings.randomString(7);

    cy.visit("/dcim/device-types/add/");
    loginPages.fillLogInForim("admin", "admin");
    deviceHelper.selectManufacturer("Cisco");
    deviceHelper.enterModel(model);
    deviceHelper.enterSlug(slug);
    deviceHelper.selectPlatform("Cisco");
    deviceHelper.enterDescription("test description");
    deviceHelper.selectTags("Golf");
    deviceHelper.defineHeight("2", "True", "False");
    deviceHelper.enterPartNumber("part number");
    // deviceHelper.selectStatus('Parent')
    deviceHelper.selectAirflow("Front to rear");
    deviceHelper.enterWeight(200);
    deviceHelper.weightUnit("Ounces");
    deviceHelper.enterComment("lorem ipsum dolor sil alamet");
    deviceHelper.submitDeviceAndVerifyInvalidEntry();
  });

  it("Create new different device", () => {
    model = strings.randomString(5);
    slug = strings.randomString(7);

    cy.visit("/dcim/device-types/add/");
    loginPages.fillLogInForim("admin", "admin");
    deviceHelper.selectManufacturer("Cisco");
    deviceHelper.enterModel(model);
    deviceHelper.enterSlug(slug);
    deviceHelper.selectPlatform("Cisco");
    deviceHelper.enterDescription("test description");
    deviceHelper.selectTags("Golf");
    deviceHelper.defineHeight("2", "True", "False");
    deviceHelper.enterPartNumber("part number");
    // deviceHelper.selectStatus('Parent')
    deviceHelper.selectAirflow("Front to rear");
    deviceHelper.enterWeight(200);
    deviceHelper.weightUnit("Ounces");
    deviceHelper.enterComment("lorem ipsum dolor sil alamet");
    deviceHelper.submitDeviceAndVerifySuccess(model);
  });

  it.only("create invalid device, edit error ans submit successfully", () => {
    model = strings.randomString(5);
    slug = strings.randomString(7);

    cy.visit("/dcim/device-types/add/");
    loginPages.fillLogInForim("admin", "admin");
    deviceHelper.selectManufacturer("Cisco");
    deviceHelper.enterSlug(slug);
    deviceHelper.selectPlatform("Cisco");
    deviceHelper.enterDescription("test description");
    deviceHelper.selectTags("Golf");
    deviceHelper.defineHeight("2", "True", "False");
    deviceHelper.enterPartNumber("part number");
    // deviceHelper.selectStatus('Parent')
    deviceHelper.selectAirflow("Front to rear");
    deviceHelper.enterWeight(200);
    deviceHelper.weightUnit("Ounces");
    deviceHelper.enterComment("lorem ipsum dolor sil alamet");
    cy.get(".btn-primary").contains("Create").click();
    deviceHelper.verifyErrorMessage()
    deviceHelper.enterModel(model);
    deviceHelper.submitDeviceAndVerifySuccess(model);
    
  });

});
