
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const statesHash = [
    {
        key: "AL",
        text: "Alabama",
        value: "https://alabamalawyers.org/"
    },
    {
        key: "AK",
        text: "Alaska",
        value: "https://www.anchoragebarassociation.org/find-a-lawyer-anchorage-alaska/"
    },
    {
        key: "AZ",
        text: "Arizona",
        value: "https://azbar.legalserviceslink.com/"
    },
    {
        key: "AR",
        text: "Arkansas",
        value:"https://mx.arkbar.com/ARKANSASFINDALAWYER.aspx"
    },
    {
        key: "CA",
        text: "California",
        value:"http://members.calbar.ca.gov/fal/LicenseeSearch/FindLegalHelp#searchlink"
    },
    {
        key: "CO",
        text: "Colorado",
        value:"https://www.cobar.org/Licensed-Lawyer"
    },
    {
        key: "CT",
        text: "Connecticut",
        value:"https://members.ctbar.org/search/custom.asp?id=2968"
    },
    {
        key: "DE",
        text: "Delaware",
        value: "https://www.dsba.org/"},
    {
        key: "DC",
        text: "District Of Columbia",
        value: "https://www.dcbar.org/for-the-public/hiring-a-lawyer.cfm"
    },
    {
        key: "FL",
        text: "Florida",
        value: "https://www.floridabar.org/"
    },
    {
        key: "GA",
        text: "Georgia",
        value: "https://www.gabar.org/index.cfm"
    },
    {
        key: "HI",
        text: "Hawaii",
        value: "https://hsba.org/HSBA/"
    },
    {
        key: "ID",
        text: "Idaho",
        value: "https://isb.idaho.gov/"
    },
    {
        key: "IL",
        text: "Illinois",
        value: "https://www.isba.org/public/illinoislawyerfinder"
    },
    {
        key: "IN",
        text: "Indiana",
        value: "https://www.indylawyerfinder.com/"
    },
    {
        key: "IA",
        text: "Iowa",
        value: "https://www.iowafindalawyer.com/"
    },
    {
        key: "KS",
        text: "Kansas",
        value: "https://www.ksbar.org/search/default.asp?m=basic"
    },
    {
        key: "KY",
        text: "Kentucky",
        value: "https://www.kybar.org/search/custom.asp?id=2947"
    },
    {
        key: "LA",
        text: "Louisiana",
        value: "https://www.lsba.org/default.aspx"
    },
    {
        key: "ME",
        text: "Maine",
        value: "https://www.mainebar.org/"
    },
    {
        key: "MD",
        text: "Maryland",
        value: "https://www.msba.org/about/member-directory/"
    },
    {
        key: "MA",
        text: "Massachusetts",
        value: "https://www.massbar.org/"
    },
    {
        key: "MI",
        text: "Michigan",
        value: "https://www.zeekbeek.com/sbm"
    },
    {
        key: "MN",
        text: "Minnesota",
        value: "https://www.mnbar.org/member-directory/find-a-lawyer"
    },
    {
        key: "MS",
        text: "Mississippi",
        value: "https://www.msbar.org/"
    },
    {
        key: "MO",
        text: "Missouri",
        value: "http://missourilawyershelp.org/find-lawyer/"
    },
    {
        key: "MT",
        text: "Montana",
        value: "https://www.montanabar.org/"
    },
    {
        key: "NE",
        text: "Nebraska",
        value: "https://www.nefindalawyer.com/"
    },
    {
        key: "NV",
        text: "Nevada",
        value: "https://www.nvbar.org/"
    },
    {
        key: "NH",
        text: "New Hampshire",
        value: "https://www.nhbar.org/lawyer-referral-service"
    },
    {
        key: "NJ",
        text: "New Jersey",
        value: "https://tcms.njsba.com/"
    },
    {
        key: "NM",
        text: "New Mexico",
        value: "https://www.nmbar.org/nmstatebar/Directory/I_Need_a_Lawyer/Find_an_Attorney/Nmstatebar/For_Public/Find_an_Attorney.aspx?hkey=21eb22c1-ad95-416b-9aac-e293025c814f"
    },
    {
        key: "NY",
        text: "New York",
        value: "https://nysba.org/"
    },
    {
        key: "NC",
        text:  "North Carolina",
        value: "https://www.nclawspecialists.gov/for-the-public/find-a-board-certified-specialist/"
    },
    {
        key: "ND",
        text:  "North Dakota",
        value: "https://www.sband.org/"
    },
    {
        key: "OH",
        text:  "Ohio",
        value: "https://www.ohiobar.org/cle-certification/certification/"
    },
    {
        key: "OK",
        text:  "Oklahoma",
        value: "https://ams.okbar.org/eweb/startpage.aspx?site=FALWEB"
    },
    {
        key: "OR",
        text:  "Oregon",
        value: "https://www.osbar.org/index.html"
    },
    {
        key: "PA",
        text:  "Pennsylvania",
        value: "https://www.pabar.org/site/"
    },
    {
        key: "PR",
        text:  "Puerto Rico",
        value: "https://capr.org/"
    },
    {
        key: "RI",
        text:  "Rhode Island",
        value: "https://ribar.com/"
    },
    {
        key: "SC",
        text:  "South Carolina",
        value: "https://www.scbar.org/"
    },
    {
        key: "SD",
        text:  "South Dakota",
        value: "http://www.statebarofsouthdakota.com/l/li/?redir=p%2Fcm%2Fld%2Ffid%3D54"
    },
    {
        key: "TN",
        text:  "Tennessee",
        value: "https://www.memphisbar.org/index.cfm?pg=PublicMembersDirectory"
    },
    {
        key: "TX",
        text:  "Texas",
        value: "https://www.texasbar.com/AM/Template.cfm?Section=Find_A_Lawyer&Template=/CustomSource/MemberDirectory/Search_Form_Client_Main.cfm"
    },
    {
        key: "UT",
        text:  "Utah",
        value: "https://www.licensedlawyer.org/"
    },
    {
        key: "VT",
        text:  "Vermont",
        value: "https://www.vtbar.org/"
    },
    {
        key: "VI",
        text:  "Virgin Islands",
        value: "https://vibar.org/search/custom.asp?id=2276"
    },
    {
        key: "VA",
        text:  "Virginia",
        value: "http://member.vsb.org/attsearch/search.aspx"
    },
    {
        key: "WA",
        text:  "Washington",
        value: "https://www.mywsba.org/PersonifyEbusiness/Default.aspx?TabID=1536"
    },
    {
        key: "WV",
        text:  "West Virginia",
        value: "https://wvbar.org/"
    },
    {
        key: "WI",
        text:  "Wisconsin",
        value: "https://www.wisbar.org/Pages/default.aspx"
    },
    {
        key: "WY",
        text:  "Wyoming",
        value: "https://www.wyomingbar.org/for-the-public/hire-a-lawyer/membership-directory/"
    }
]

const StateDropdown = () => (
    <Dropdown
      placeholder='Select State'
      selection
      search="true"
      options={statesHash}
    />
    
  )
  
  export default StateDropdown