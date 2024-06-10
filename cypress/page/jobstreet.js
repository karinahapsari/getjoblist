export default class JobStreet {

    clickJobItem = (index) =>
        cy.get(`:nth-child(${index}) > :nth-child(1) > :nth-child(1) > [data-testid="job-card"] > ._1iz8dgs50 > [data-testid="job-list-item-link-overlay"]`)
        .scrollIntoView()
        .click({force:true});

    getData = () => {

        let jobDetails = {};


        cy.get('body').then($element => {
            if ($element.find(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > ._1akoxc55 > :nth-child(1) > ._1iz8dgs4y > .y735df0').length > 0) {
                
                cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > ._1akoxc55 > :nth-child(1) > ._1iz8dgs4y > .y735df0')
                .scrollIntoView()
                .invoke('text').then((jobTitle) => {
                    jobDetails.job_title = jobTitle; 
                  });
        
            } else {
                cy.get('._1iz8dgsa2 > ._1akoxc55 > :nth-child(1) > ._1iz8dgs4y > .y735df0')
                .scrollIntoView()
                .invoke('text').then((jobTitle) => {
                    jobDetails.job_title = jobTitle; 
                  });
            }
        });
        

        cy.get('._1akoxc55 > :nth-child(2) > ._1akoxc56 > ._1akoxc52e > :nth-child(1) > .y735df0')
        .invoke('text').then((companyName) => {
            jobDetails.company_name = companyName; 
          });

        cy.get(':nth-child(1) > ._1iz8dgs5a > ._1iz8dgsp > ._1iz8dgsa2 > ._1akoxc50 > ._1iz8dgs6q > .y735df0')
        .invoke('text').then((location) => {
            jobDetails.location = location; 
          });

        cy.get(':nth-child(3) > ._1iz8dgs5a > ._1iz8dgsp > ._1iz8dgsa2 > ._1akoxc50 > ._1iz8dgs6q > .y735df0')
        .invoke('text').then((employement) => {
            jobDetails.employement = employement; 
          });


        cy.get('body').then($element => {
            if ($element.find(':nth-child(4) > ._1iz8dgs5a > ._1iz8dgsp > ._1iz8dgsa2 > ._1akoxc50 > ._1iz8dgs6q > .y735df0').length > 0) {
                
                cy.get(':nth-child(4) > ._1iz8dgs5a > ._1iz8dgsp > ._1iz8dgsa2 > ._1akoxc50 > ._1iz8dgs6q > .y735df0')
                .scrollIntoView()
                .invoke('text').then((salary) => {
                    jobDetails.salary = salary; 
                  });
        
            } else {
                jobDetails.salary = 0; 
            }
        });

        cy.get('[data-automation="jobAdDetails"] > .y735df0')
        .scrollIntoView()
        .invoke('text').then((job_description) => {
            jobDetails.job_description = job_description; 
          });

        // Read existing data from the JSON file
        cy.readFile('example.json').then((existingData) => {
        let newData = [];
            if (Array.isArray(existingData)) {
                newData = existingData;
            } else if (typeof existingData === 'object') {
                newData.push(existingData);
            }

            // Append the new job details to the existing data
            newData.push(jobDetails);

            // Write the updated data back to the JSON file
            cy.writeFile('example.json', newData);
         });

    }    
}