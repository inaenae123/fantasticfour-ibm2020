import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
    {
        href:'/CreateAccount',
        meta:"Click Here",
        header:'Create a Petition',
        description:'You will be able to share the link to others in an effort to get bring attention to an issue. Individuals will be able to sign your petition to support your cause.'
    },
    {
        href:'/ManagePetition',
        meta:"Click Here",
        header:'Manage a Petition',
        textAlign: "center",
        description:'You will be able to post updates to the petition with new information or photos. You can also download a printable PDF copy of your petition with all of the signatures'
    }
  ]

  const HelpCard = () => <Card.Group centered items={items} />

export default HelpCard;