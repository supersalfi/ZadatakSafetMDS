const rackHelper = {
  elements: {
    accessSwitch: '[data-value="4"]',
    ApplicationServer: '[data-value="7"]',
    coreSwitch: '[data-value="2"]',
    databaseServer: '[data-value="8"]',
    device_S: '[data-value="13"]',
    distributionSwitch: '[data-value="3"]',
    laptop: '[data-value="12"]',
    pdu: '[data-value="5"]',
    patchPanel: '[data-value="6"]',
    router: '[data-value="1"]',
    server: '[data-value="11"]',
    torSwitch: '[data-value="9"]',
    wifi: '[data-value="10"]',
  },

  goToAddDeviceForSPecificPosition(position) {
    cy.visit(
      "https://demo.netbox.dev/dcim/devices/add/?site=24&location=&rack=39&face=front&position=${position}"
    );
  },

  enterName(deviceName) {
    cy.get("#id_name").type(deviceName);
  },
  selectDeviceRole(deviceRole) {
    cy.get(
      ":nth-child(1) > :nth-child(3) > .col > .d-flex > .ts-wrapper > .ts-control"
    ).type(deviceRole);

    if (deviceRole === "Access Switch") {
      cy.get(this.elements.accessSwitch).click();
    }

    if (deviceRole === "Application Server") {
      cy.get(this.elements.ApplicationServer).click();
    }
    if (deviceRole === "Core Switch") {
      cy.get(this.elements.coreSwitch).click();
    }
    if (deviceRole === "Database Server") {
      cy.get(this.elements.databaseServer).click();
    }
    if (deviceRole === "Device_S") {
      cy.get(this.elements.device_S).click();
    }
    if (deviceRole === "Distribution Switch") {
      cy.get(this.elements.distributionSwitch).click();
    }
    if (deviceRole === "Laptop") {
      cy.get(this.elements.laptop).click();
    }
    if (deviceRole === "PDU") {
      cy.get(this.elements.pdu).click();
    }
    if (deviceRole === "Patch Panel") {
      cy.get(this.elements.patchPanel).click();
    }
    if (deviceRole === "Router") {
      cy.get(this.elements.router).click();
    }
    if (deviceRole === "Server") {
      cy.get(this.elements.server).click();
    }
    if (deviceRole === "ToR Switch") {
      cy.get(this.elements.torSwitch).click();
    }
    if (deviceRole === "Wi-Fi оборудование") {
      cy.get(this.elements.wifi).click();
    }
  },

  enterDEscription(description) {
    cy.get("#id_description").type(description);
  },

  selecteviceType(deviceType) {
    cy.intercept("/api/dcim/device-types/?brief=true&limit=100&q=*").as(
      "loadDeviceType"
    );
    cy.get(
      ":nth-child(2) > :nth-child(2) > .col > .d-flex > .ts-wrapper > .ts-control"
    ).type(deviceType);
    cy.wait("@loadDeviceType");
    cy.get("#id_device_type-ts-dropdown").click();
  },

  enterSerialNumber(serialNumber) {
    cy.get("#id_serial").type(serialNumber);
  },

  enterAssetTag(assetTag) {
    cy.get("#id_asset_tag").type(assetTag);
  },

  selectPosition(position) {
    cy.intercept(
      "/api/dcim/racks/39/elevation/?brief=true&face=front&limit=100&q=*"
    ).as("loadPosition");
    cy.get(":nth-child(6) > .col > .d-flex > .ts-wrapper > .ts-control")
    .type(position);
    cy.wait("@loadPosition");
    cy.get(`[data-value="${position}"]`).click();
  },

  selectStatus(status){
    cy.get(':nth-child(2) > .col > .ts-wrapper > .ts-control').type(status)
    cy.get(`[data-value="${status}"]`).click();

  },

  submitDevice(deviceName, assetTag) {
    cy.get(".btn-primary").click();
    cy.get(".toast-body").contains(
      "Created device " + deviceName + " (" + assetTag + ")"
    );
  },
};

export default rackHelper;
