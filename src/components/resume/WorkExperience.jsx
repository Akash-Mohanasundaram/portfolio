const WorkExperience = [
    {
        id: 1,
        title: "Web System Administrator I",
        company: "Mouser Electronics",
        yearsActive: "July 2023 - Present",
        information: [  "Developed a dockerized application in which Python automation scripts maintain a file sync between Azure and On-Prem Servers in Mousers Content Delivery Network. ",
                        "Dockerized legacy application that initially fully handled cache clears of Files in Akamai. ",
                        "Built a web application enabling the marketing team to clear cache for all component images in Netstorage. ",
                        "Built an automation script that interacts with the freshservice api to automatically solve certain types of tickets",
                        "Deployed monitoring scripts across a network of 600 servers, capturing crucial server statistics and netstat details and updated all the details in the database.",
                        "Developed a web application for the Ops team to monitor the real-time status of all on-premises servers through database logs, view detailed server metrics and manage user permissions for all groups within the Internet Business Department, streamlining administrative tasks and improved operational efficiency.",
                        "Made Azure Dev Ops Ansible Pipelines for all my UI's and deployed the docker images to 3 separate servers for High Availability and Fault Tolerance.",
                        "Implemented Zabbix for automated monitoring, ensuring swift responses to application degradation."]
      ,
    },
    {
        id: 2,
        title: "Web Operations Intern",
        company: "Mouser Electronics",
        yearsActive: "June 2022 - May 2023",
        information: 
        ["Migrating legacy PHP code to Python which removes scaling issues for the existing application and synchronizes millions of files between On-Prem servers and Akamai.",
        "Migrated the application data from MYSQL to MSSQL and Redis .",
        "Developed an application to monitor the IBM MQ of Mouser customer orders and report on the details.",
        "Made a Graphana dashboard with the data received from all the automation scripts and also added zabbix triggers as necessary."]
    }
];

export default WorkExperience;
