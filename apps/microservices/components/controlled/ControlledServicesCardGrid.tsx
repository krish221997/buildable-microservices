import { useListBuildableServices } from '../../logic/flows/BuildableServices';
import {
  BuildableMicroServicesCard,
    BuildableMicroServicesCardLoading,
  BuildableModal,
} from '@buildable-microservices/components';
import { useDisclosure } from '@chakra-ui/hooks';
import { useColorMode } from '@chakra-ui/color-mode';
import { FC } from 'react';
import useStore from '../../logic/zustand';
import TYPES from '../../config/types';

const ControlledServicesCardGrid: FC = () => {
  const { rows, status } = useListBuildableServices();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode } = useColorMode();
  const {setSelect, microserviceProvider} = useStore((state) => ({
      setSelect: state.setSelect,
      microserviceProvider: state.select[TYPES.SELECT.MICROSERVICE_PROVIDER]
  }))

  const handleOnClick = (service) => {
      setSelect(TYPES.SELECT.MICROSERVICE_PROVIDER, service);
      onOpen()
  };

  return (
    <>
      {status === 'success' ?
        rows.map((service) => {
          return (
            <BuildableMicroServicesCard
              image={service.src}
              heading={service.title}
              subHeading={service.subTitle}
              badgePlacement={'end'}
              badgeContent={'Active'}
              isDisabled={false}
              onEvent={() => handleOnClick(service)}
              maxWidth={'300px'}
            />
          );
        }) : [0,1,2,3,4,5,6,7,8,9].map(() => <BuildableMicroServicesCardLoading maxWidth={'300px'}/>)}
        <BuildableModal
          isOpen={isOpen}
          onClose={onClose}
          heading={`Request access to ${microserviceProvider?.title}`}
          subHeading={
            'Adding additional microservices requires access to beta. Click below to join the waitlist and upgrade for free when your spot is called.'
          }
          buttonText={'Join waitlist'}
          colorMode={colorMode}
          // isProcessing={true}
          processingMessage={'Adding to waitlist'}
          onSubmit={(value) => console.log(value)}
        />
    </>
  );
};

export default ControlledServicesCardGrid;
