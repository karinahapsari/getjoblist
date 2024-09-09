export default class JobStreet {

    clickJobItem = (index) =>
        cy.get(`:nth-child(${index}) > :nth-child(1) > [data-testid="job-card"] > .gothhq50 > [data-testid="job-list-item-link-overlay"]`)
        .scrollIntoView()
        .click({force:true});

    getData = () => {

        let jobDetails = {};


        cy.get('body').then($element => {
            if ($element.find('.gothhqa2 > .s52d3b5 > :nth-child(1) > .gothhq4y > .cxtob0').length > 0) {
                
                cy.get('.gothhqa2 > .s52d3b5 > :nth-child(1) > .gothhq4y > .cxtob0')
                .scrollIntoView()
                .invoke('text').then((jobTitle) => {
                    jobDetails.job_title = jobTitle; 
                  });
        
            } else {
                cy.get('.s52d3b8 > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .s52d3b5 > :nth-child(1) > .gothhq4y > .cxtob0')
                .scrollIntoView()
                .invoke('text').then((jobTitle) => {
                    jobDetails.job_title = jobTitle; 
                  });
            }
        });
        

        cy.get('.gothhqgi > :nth-child(1) > .cxtob7 > .gothhq4y')
        .invoke('text').then((companyName) => {
            jobDetails.company_name = companyName; 
          });

        cy.get('.s52d3b6 > :nth-child(1) > .gothhq5a > .gothhqp > .gothhqa2 > .s52d3b0 > .gothhq6q > .cxtob0')
        .invoke('text').then((location) => {
            jobDetails.location = location; 
          });

        cy.get(':nth-child(3) > .gothhq5a > .gothhqp > .gothhqa2 > .s52d3b0 > .gothhq6q > .cxtob0')
        .invoke('text').then((employement) => {
            jobDetails.employement = employement; 
          });


        cy.get('body').then($element => {
            if ($element.find(':nth-child(4) > .gothhq5a > .gothhqp > .gothhqa2 > .s52d3b0 > .gothhq6q > .cxtob0').length > 0) {
                
                cy.get(':nth-child(4) > .gothhq5a > .gothhqp > .gothhqa2 > .s52d3b0 > .gothhq6q > .cxtob0')
                .scrollIntoView()
                .invoke('text').then((salary) => {
                    jobDetails.salary = salary; 
                  });
        
            } else {
                jobDetails.salary = 0; 
            }
        });

        cy.get('[data-automation="jobAdDetails"] > .cxtob0')
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
            cy.writeFile('hasil_scrap.json', newData);
         });

    }    
}