import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teams=[
    {
      name:"APP DEVELOPMENT TEAM",
      desc:"Krushi Sarathi has dedicated a team of young and enthusiastic app developers led by Mr. XYZ. The front-end of the application is decorated with a User-Friendly interface, which can be used by any new or experienced android user. Proper facilities for increasing the reach of agricultural products for a vendor and the ease to receive the commodities for a farmer is an attractive feature of the application. The users will have detailed information about the products they are interested in. It will also feature a 24/7 helpdesk which will be motivated to resolve queries of the users. The technological solutions will also have features for interested investors to connect with initiative"},
      {
        name:"WEB DEVELOPMENT TEAM",
        desc:"Krushi Sarathi has created a team of enthusiastic web developers under the passionate team leader XYZ. The main function of the web development team is to provide the users a seamless experience while using our website. The team is working with utmost sincerity to enhance the user interface and help our farmers and vendors to go the page they want. The onus of reforming and updating the site regularly lies on the shoulders of these young developers and they are proud to carry it. The team has also worked hard to use the state-of-the-art technology to develop the site."
      },
      {
        name:"DESIGN TEAM",
        desc:"A potential graphic representation proves to be a very powerful tool of communicating ideas that can captivate the customers and keep them informed. Working towards this aspect, the design team develops inviting layout for the website, interactive posts for the social media platforms, creative logos and advertisements. Mr. XYZ leads this team."
      },
      {
        name:"SOCIAL MEDIA TEAM",
        desc:"Nowadays social media is a part and parcel of the lives of people thus it proves to be the biggest platform for spreading information regarding the work of our company. Social media helps to reach each and every person who is supposed to be the beneficiary of all the hard work that is being done. The social media team is there to keeps up with this requirement. The team manages the accounts representing Krushi Sarathi on social media platforms. By creating pages, accounts, posts, etc. on the different social media platforms like Facebook, Twitter, Instagram, the social media team keeps the farmer informed about necessary information regarding crops, weather forecast, guidance about the crop to be taken, different schemes of the government,etc. Headed by Mr. XYZ, this team performs the most crucial task of increasing the engagement of people in the online space."
      },
      {
        name:"PUBLICITY AND MARKETING TEAM",
        desc:"Krushi Sarathi has made its mark on all major Social Media platforms with an outstanding response in just a couple of days. Association with the primes of the industry and relevant network credits the growth rate of the initiative. Mr. XYZ along with the team, is dedicated to improve the vendor and user ordeal by thoroughly studying the ground needs of the market. Reaching out to the most remote users and help them utilize this innovative market is one of the major facets of this team."
      },
      {
        name:"DOCUMENTATION TEAM",
        desc:"The work of documentation team is to prepare and keep track of all documents, plans, blueprints and designs pertaining to Krushi Sarathi. Organizing and storing the data collected from various surveys and making it available for the marketing team to draw useful insights for the organizational strategy framing counts among one of its prime contribution. They focus on sorting data so as to make it readily accessible and retrievable as and when needed. Ms. XYZ have been efficiently managing and delegating the tasks to the entire documentation team."
      },
      {
        name:"CONTENT WRITING TEAM",
        desc:"Content writing team is the pen and ink of the whole company. The content writer team writes the content for the company. It is responsible for ideation, creation, optimization and distribution of the efforts that all the other teams are putting in.  We at Krushi Sarathi want to reach each and every vendor and farmer and content writing team plays an important role in creating the content for the website, for the social media, for the application in a variety of languages which includes English, Hindi, Marathi and other vernacular languages."
      }      
  ];

}
