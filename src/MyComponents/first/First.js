import React from 'react'
import Avatar from './../Avatar/Avatar';

const First = () => {

  const AvtarList=[
    {
      src:"https://joeschmoe.io/api/v1/male/jai",
      id:1,
      name:'Kamal kabra',
      des:'Project Manager'
    },
    {
      src:"https://joeschmoe.io/api/v1/male/jerry",
      id:2,
      name:'Shrey Patel',
      des:'Project Leader'
    },
    {
      src:"https://joeschmoe.io/api/v1/male/joe",
      id:3,
      name:'Vivek Pande',
      des:'Senior Developer'
    },
    {
      src:"https://joeschmoe.io/api/v1/male/jon",
      id:4,
      name:'Nirav Prajapati',
      des:'Project Intern'
    }
  ];
  
const AvatarArraylist = AvtarList.map((AvatarArray, i)=>{
    return <Avatar
      src={AvtarList[i].src} id={AvtarList[i].id} 
      name={AvtarList[i].name} des={AvtarList[i].des} />
  })

    return (
        <>
        {AvatarArraylist}
        </>
    )
}

export default First;
