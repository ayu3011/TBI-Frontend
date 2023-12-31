'use client'
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import MentorPage from "./individual";




const Mentors = () => {
  return (

    <div className="flex  flex-col mx-auto ">
      <Tabs aria-label="Options" fullWidth={false} size="lg" color="secondary" className="mx-auto mb-4 py-2">
        <Tab key="technical" title="Technical Mentors">
         <MentorPage/>
        </Tab>
        <Tab key="business" title="Business Mentors">
        <MentorPage/>
        </Tab>
        <Tab key="financial" title="Financial Partner">
        <MentorPage/>
        </Tab>


      </Tabs>
    </div>
  )
}

export default Mentors
