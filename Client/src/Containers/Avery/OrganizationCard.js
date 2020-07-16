import React from 'react';
import { Card } from 'semantic-ui-react';

const items = [
  {
    header: 'The Loveland Foundation',
    description:
      'An organization advocating for black females focusing on healing from acts of racial violence and injustice',
    href: 'https://www.flipcause.com/secure/cause_pdetails/NzU4MzM=',
    color: 'red'
  },
  {
    header: 'NAACP Legal Defense and Educational Fund',
    description:
      'An organization that works through "litigation, advocacy, and public education" to effect lasting change in the U.S. government',
    href: 'https://org2.salsalabs.com/o/6857/p/salsa/donation/common/public/?donate_page_KEY=15780&_ga=2.241073157.787201692.1591214717-1012860407.1591214717',
    color: 'orange'
  },
  {
    header: 'American Civil Liberties Union',
    description:
      'An organization that seeks to ensure constitutional freedoms for every race, gender, and sexual orientation',
    href: 'https://action.aclu.org/give/fund-every-fight-ahead',
    color: 'yellow'
  },
  {
    header: 'Campaign Zero',
    description:
      'An organization that is specifically focused on putting an end to police violence',
    href: 'https://www.joincampaignzero.org/',
    color: 'olive'
  },
  {
    header: 'National Urban League',
    description:
      'An organization that fights for a world with zero equality gaps through 5 initiatives: education, jobs, housing, health and justice',
    href: 'https://nul.org/donate',
    color: 'green'
  },
  {
    header: 'Color of Change',
    description:
      'An organization that fights for a world with zero equality gaps through 5 initiatives: education, jobs, housing, health and justice',
    href: 'https://secure.actblue.com/contribute/page/support-us',
    color: 'teal'
  },
  {
    header: 'Black Lives Matter',
    description:
      'An organization whose goal is to create a world where violence is no longer inflicted on Black people',
    href: 'https://secure.actblue.com/donate/ms_blm_homepage_2019',
    color: 'blue'
  },
  {
    header: 'The Bail Project',
    description:
      'A national fund that helps pay bail for people in need (including protestors)',
    href: 'https://bailproject.org/',
    color: 'violet'
  },
  {
    header: 'Fair Fight',
    description:
      'An organization fighting to ensure free and fair elections',
    href: 'https://fairfight.com/',
    color: 'purple'
  },
  {
    header: 'The Committee to Protect Journalists',
    description:
      'An organization that serves as a lifeline for members of the media to continue pursuing their important reporting at a time when the freedom of the press is under siege',
    href: 'https://cpj.org/donate',
    color: 'pink'
  },
  {
    header: 'The Southern Poverty Law Center',
    description:
      'An organization that is doing the work to fight hate and systematic bigotry in the United States',
    href: 'https://donate.splcenter.org/',
    color: 'brown'
  },
  {
    header: 'The Brennan Center',
    description:
      'An organization that fights for voting rights, election security, campaign finance reform, electoral college reform, and an end to mass incarceration, among other avenues to achieving justice and fair representation.',
    href: 'https://www.brennancenter.org/',
    color: 'grey'
  }
]

const OrganizationCard = () => <Card.Group centered items={items} />

export default OrganizationCard;