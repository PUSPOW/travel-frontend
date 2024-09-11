/** @format */

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Cards = () => {
  return (
    <div className="place-self-center h-auto bg-blue-gray-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-5 mb-10 text-center">
          <Typography variant="h3" color="blue-gray" className="font-bold">
            Inspiration for your next getaway
          </Typography>
          <Typography variant="h5" color="blue-gray" className="font-medium">
            We've curated some amazing experiences to help you find your
            getaway.
          </Typography>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* {Array(3)
            .fill(null)
            .map((_, index) => ( */}
          <Card className="max-w-[24rem] mx-auto overflow-hidden rounded">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography className="space-x-5" variant="lead">
                FOR THOSE WHO LOVE{" "}
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mt-2">
                To Explore nature
              </Typography>
              <Typography color="gray" className="mt-3 font-normal">
                Discover some of the most beautiful scenery - from the wonders
                of Snowdonia to the famous beauty of scottish highlands.
              </Typography>
            </CardBody>
          </Card>
          <Card className="max-w-[24rem] mx-auto overflow-hidden rounded">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography className="space-x-5" variant="lead">
                FOR THOSE WHO WANT
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mt-2">
                To relax, rest & re-set
              </Typography>
              <Typography color="gray" className="mt-3 font-normal">
                Experience mind and and body connection through breathing
                exercises and relaxation with our yoga inspired get away for you
                and the family.
              </Typography>
            </CardBody>
          </Card>
          <Card className="max-w-[24rem] mx-auto overflow-hidden rounded">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography className="space-x-5" variant="lead">
                FOR THOSE WHO HAVE
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mt-2">
                Four-legged friends
              </Typography>
              <Typography color="gray" className="mt-3 font-normal">
                When going on holiday nobody wants to put there dog in a kennel.
                so, lets keep the family together to our pet friendly cabins.
              </Typography>
            </CardBody>
          </Card>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
