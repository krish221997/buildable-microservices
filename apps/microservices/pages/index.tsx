import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { QueryClient } from 'react-query';
import {dehydrate} from "react-query/hydration";
import Page from "../components/pages/index"
import { models } from '../logic/queries';
import dispatchRecipe from '../logic/utils/dispatchRecipe';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Buildable microservices</title>
      </Head>
      <Page/>
    </>
  );
};

const getMicroServices = () => {
  return dispatchRecipe({
    triggerId: models.services.actions.list
  })
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  const triggerId = models.services.actions.list;
  const queryName = models.services.name;
  await queryClient.prefetchQuery(queryName, getMicroServices, {staleTime: 0});
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default IndexPage;
