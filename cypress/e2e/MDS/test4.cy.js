import loginPages from "../Helpers/accountHelper";
import deviceHelper from "../Helpers/deviceHelper.js";
import strings from "../../fixtures/strings.js";
import rackHelper from "../Helpers/rackHelper.js";
let deviceName = strings.randomString(7),
  assetTag = strings.randomString(10),
  serialNumber = strings.randomString(12),
  rackPosition;

describe("Delete devices test", () => {
  it("add decomissioned device to be deleted", () => {
    rackPosition = 20;
    cy.visit("/dcim/racks/39/");
    loginPages.fillLogInForim("admin", "admin");
    rackHelper.goToAddDeviceForSPecificPosition(rackPosition);
    rackHelper.enterName(deviceName);
    rackHelper.selectDeviceRole("PDU");
    rackHelper.enterDEscription("lorem ipsum");
    deviceHelper.selectTags("Bravo");
    rackHelper.selecteviceType("ISR 1111-8P ");
    deviceHelper.selectAirflow("Passive");
    rackHelper.enterSerialNumber(serialNumber);
    rackHelper.enterAssetTag(assetTag);
    rackHelper.selectPosition(rackPosition);
    rackHelper.selectStatus("decommissioning");
    rackHelper.submitDevice(deviceName, assetTag);
    
  });

  it("find added device in device list, mark it and delete it", () => {
    cy.visit("/dcim/devices/");
    loginPages.fillLogInForim("admin", "admin");
    
    deviceHelper.findDevicefromDeviceListandDeletedIt(deviceName);
  });

  it("add decomissioned device to be deleted", () => {
    rackPosition = 20;
    
    cy.visit("/dcim/racks/39/");
    loginPages.fillLogInForim("admin", "admin");
    rackHelper.goToAddDeviceForSPecificPosition(rackPosition);
    rackHelper.enterName(deviceName);
    rackHelper.selectDeviceRole("PDU");
    rackHelper.enterDEscription("lorem ipsum");
    deviceHelper.selectTags("Bravo");
    rackHelper.selecteviceType("ISR 1111-8P ");
    deviceHelper.selectAirflow("Passive");
    rackHelper.enterSerialNumber(serialNumber);
    rackHelper.enterAssetTag(assetTag);
    rackHelper.selectPosition(rackPosition);
    rackHelper.selectStatus("decommissioning");
    rackHelper.submitDevice(deviceName, assetTag);
   
  });

  it("find decomissioned deviceopen device page and delete it", () => {
    cy.visit("/dcim/devices/");
    loginPages.fillLogInForim("admin", "admin");
    c
    deviceHelper.FindDeviceFromDeviceListAndDeleteItFromDevicePage(deviceName);
  });
});
