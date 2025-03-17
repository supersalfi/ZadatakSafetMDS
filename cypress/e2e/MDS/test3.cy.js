import loginPages from "../Helpers/accountHelper";
import deviceHelper from "../Helpers/deviceHelper.js";
import strings from "../../fixtures/strings.js";
import rackHelper from "../Helpers/rackHelper.js";
let deviceName,assetTag,serialNumber,rackPosition;

describe("Create device type tests", () => {
  it("Create new device type", () => {
    deviceName = strings.randomString(7);
    assetTag = strings.randomString(10);
    serialNumber = strings.randomString(12);
    rackPosition = 22;

    cy.visit("/dcim/racks/39/");
    loginPages.fillLogInForim("admin", "admin");
    rackHelper.goToAddDeviceForSPecificPosition(rackPosition);
    rackHelper.enterName(deviceName);
    rackHelper.selectDeviceRole("PDU");
    rackHelper.enterDEscription("lorem ipsum")
    deviceHelper.selectTags("Bravo");
    rackHelper.selecteviceType("ISR 1111-8P ")
    deviceHelper.selectAirflow("Passive")
    rackHelper.enterSerialNumber(serialNumber)
    rackHelper.enterAssetTag(assetTag)
    rackHelper.selectPosition(rackPosition)
    rackHelper.submitDevice(deviceName,assetTag)
  });
});
