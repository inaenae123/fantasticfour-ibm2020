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
  }
]

const OrganizationCard = () => <Card.Group centered items={items} />

export default OrganizationCard;