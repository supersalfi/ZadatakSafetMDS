const accountHelper = {
  elements: {
    frontToRear: '[data-value="front-to-rear"]',
    rearToFront: '[data-value="rear-to-front"]',
    leftToRight: '[data-value="left-to-right"]',
    rightToLeft: '[data-value="right-to-left"]',
    sideToRear: '[data-value="side-to-rear"]',
    rearToSide: '[data-value="rear-to-side"',
    bottomToTop: '[data-value="bottom-to-top"]',
    topToBottom: '[data-value="top-to-bottom"]',
    passive: '[data-value="passive"]',
    mixed: '[data-value="mixed"]',
    unitKg: '[data-value="kg"]',
    unitGrams: '[data-value="g"]',
    unitLb: '[data-value="lb"]',
    unitOz: '[data-value="oz"]',
  },

  selectManufacturer(Manufacturer) {
    cy.intercept("/api/dcim/manufacturers/?brief=true&limit=100").as(
      "waitRequest"
    );
    cy.intercept("/api/dcim/manufacturers/?brief=true&limit=100&q=*").as(
      "loadManufacturerResultList"
    );
    cy.get(":nth-child(2) > .col > .d-flex > .ts-wrapper > .ts-control").type(
      Manufacturer
    );
    //cy.wait("@waitRequest");
    cy.wait("@loadManufacturerResultList");

    cy.get("#id_manufacturer-ts-dropdown .active").click();
  },

  enterModel(modelNumber) {
    cy.get("#id_model").type(modelNumber);
  },

  enterSlug(Slug) {
    cy.get("#id_slug").type(Slug);
  },

  selectPlatform(Platform) {
    cy.intercept(
      "/api/dcim/platforms/?brief=true&limit=100&manufacturer_id=null&manufacturer_id=*&q=*"
    ).as("loadPlatform");
    cy.get("#id_default_platform-ts-control").type(Platform);
    cy.wait("@loadPlatform");
    cy.get("#id_default_platform-ts-dropdown .active").click();
  },

  enterDescription(Description) {
    cy.get("#id_description").type(Description);
  },

  selectTags(Tag) {
    cy.intercept(
      "/api/extras/tags/?brief=true&for_object_type_id=*&limit=100&q=*"
    ).as("LoadTags");
    cy.get("#id_tags-ts-control").type(Tag);
    cy.wait("@LoadTags");
    cy.get("#id_tags-ts-dropdown").click();
  },
  defineHeight(Height, Utilization, fullDepth) {
    cy.get("#id_u_height").clear();
    cy.get("#id_u_height").type(Height);

    if (Utilization === "True") {
      cy.get("#id_exclude_from_utilization").click();
    }

    if (fullDepth === "False") {
      cy.get("#id_is_full_depth").click();
    }
  },

  enterPartNumber(partNumber) {
    cy.get("#id_part_number").type(partNumber);
  },
  selectStatus(status) {
    if (status === "Parent") {
      cy.get("#id_subdevice_role-ts-control").type(status);
      cy.get("#id_subdevice_role-opt-1").click();
    } else {
      if (status === "Child") {
        cy.get("#id_subdevice_role-ts-control").type(status);
        cy.get("#id_subdevice_role-opt-2").click();
      }
    }
  },
  selectAirflow(airFlow) {
    if (airFlow === "Front to rear") {
      cy.get(":nth-child(7) > .col > .ts-wrapper > .ts-control").click();
      cy.get(this.elements.frontToRear).click();
    }

    if (airFlow === "Rear to front") {
      cy.get("#id_airflow-ts-control").click();
      cy.get(this.elements.rearToFront).click();
    }

    if (airFlow === "Left to right") {
      cy.get("#id_airflow-ts-control").click();
      cy.get(this.elements.rearToFront).click();
    }

    if (airFlow === "Right to left") {
      cy.get("#id_airflow-ts-control").click();
      cy.get(this.elements.rightToLeft).click();
    }

    if (airFlow === "Side to rear") {
      cy.get("#id_airflow-ts-control").click();
      cy.get(this.elements.sideToRear).click();
    }

    if (airFlow === "Rear to side") {
      cy.get("#id_airflow-ts-control").click();
      cy.get(this.elements.rearToSide).click();
    }

    if (airFlow === "Bottom to top") {
      cy.get("#id_airflow-ts-control").click();
      cy.get(this.elements.bottomToTop).click();
    }

    if (airFlow === "Top to bottom") {
      cy.get("#id_airflow-ts-control").click();
      cy.get(this.elements.topToBottom).click();
    }

    if (airFlow === "Passive") {
      cy.get("#id_airflow-ts-control").click();
      cy.get(this.elements.passive).click();
    }

    if (airFlow === "Mixed") {
      cy.get(":nth-child(7) > .col > .ts-wrapper > .ts-control").click();
      cy.get(this.elements.mixed).click();
    }
  },

  enterWeight(weight) {
    cy.get("#id_weight").type(weight);
  },

  weightUnit(unit) {
    if (unit === "Kilograms") {
      cy.get(":nth-child(9) > .col > .ts-wrapper > .ts-control").click();
      cy.get(this.elements.unitKg).click();
    }
    if (unit === "Grams") {
      cy.get(":nth-child(9) > .col > .ts-wrapper > .ts-control").click();
      cy.get(this.elements.unitGrams).click();
    }
    if (unit === "Pounds") {
      cy.get(":nth-child(9) > .col > .ts-wrapper > .ts-control").click();
      cy.get(this.elements.unitLb).click();
    }
    if (unit === "Ounces") {
      cy.get(":nth-child(9) > .col > .ts-wrapper > .ts-control").click();
      cy.get(this.elements.unitOz).click();
    }
  },

  enterComment(comment) {
    cy.get("#id_comments").type(comment);
  },

  submitDeviceAndVerifySuccess(modelName) {
    cy.get(".btn-primary").contains("Create").click();
    cy.get(".toast-body").contains("Created device type " + modelName);
  },

  submitDeviceAndVerifyInvalidEntry() {
    cy.get(".btn-primary").contains("Create").click();
    cy.get(".toast-body").each(($el, index, $list) => {
      cy.wrap($el).contains(
        /Device type with this Manufacturer and (Model|Slug) already exists./
      );
    });
  },

  verifyErrorMessage() {
    cy.get("#id_model").should("have.class", "is-invalid");
    cy.get(":nth-child(3) > .col > .invalid-feedback").contains(
      "This field is required."
    );
  },

  findDevicefromDeviceListandDeletedIt(deviceName) {
    cy.get(".table")
      .contains("td", deviceName)
      .closest("tr")
      .then(($row) => {
        cy.wrap($row).find("td").eq(0).click();
      });

    cy.get(".btn-list > .btn-red").click();
    cy.get(".btn-danger").click();
    cy.get(".toast-body").contains("Deleted 1 devices");
  },

  FindDeviceFromDeviceListAndDeleteItFromDevicePage(deviceName) {
    cy.get(".table")
      .contains("td", deviceName)
      .closest("tr")
      .then(($row) => {
        cy.wrap($row).find("td").eq(1).find("a").click();
      });
      cy.get('.btn-red').click()
      cy.get('.btn-danger').click()
      cy.get(".toast-body").contains("Deleted device " + deviceName);
  },
};

export default accountHelper;
