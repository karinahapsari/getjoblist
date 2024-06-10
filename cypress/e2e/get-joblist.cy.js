import { PageObjects } from "../page";

describe('Scrap joblist in Jobstreet', () => {

  it('Get Frontend joblist', () => {

    cy.viewport(1500, 900);
    cy.visit('https://www.jobstreet.co.id/id/frontend-jobs');

    for(let i=1;i<=10;i++){

    PageObjects.JobStreet.clickJobItem(i);
    cy.wait(2000);

    PageObjects.JobStreet.getData()

    }
  });

  it('Get Backend joblist', () => {

    cy.viewport(1500, 900);
    cy.visit('https://www.jobstreet.co.id/id/backend-jobs');

    for(let i=1;i<=10;i++){

    PageObjects.JobStreet.clickJobItem(i);
    cy.wait(2000);

    PageObjects.JobStreet.getData()

    }
  });
})