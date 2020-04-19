import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import * as Styled from './styles';

export const modalNames = {
  testModal: 'TestModal',
  testModal2: 'TestModal2',
};

const getRoot = (name: string) => {
  let ref = document.querySelector(`#${name}`);
  if (!ref) {
    ref = document.createElement('div');
    ref.setAttribute('id', name);
    ref.setAttribute('role', "modal");
    document.body.appendChild(ref);
  }
  return {
    target: ref,
    destroy: () => {
      try {
        if (ref) document.body.removeChild(ref);
      } catch(e) {};
    }
  };
}

interface Props {
  component?: JSX.Element;
  onClose?: () => void;
}

const ModalHandler = ({component, onClose = () => null}: Props) => {
  return (
    <Styled.ModalOverlay onClick={onClose}>
      <Styled.ModalContent onClick={ev => ev.stopPropagation()}>
        <Styled.RightLink onClick={onClose}>close</Styled.RightLink>
        {component ? React.cloneElement(component) : null}
      </Styled.ModalContent>
    </Styled.ModalOverlay>
  );
};

const useModal = (modalName: string) => {
  const { target, destroy } = getRoot(`root-${modalName}`);
  const [component, setComponent] = useState<JSX.Element | undefined>();
  const [visible, setVisible] = useState(false);
  const onClose = () => setVisible(false);

  useEffect(() => {
    import(/* webpackInclude: /\.tsx$/ */ `./modals/${modalName}`).then(
      element => {
        setComponent(element.default);
      },
    );
    return () => {
      ReactDOM.unmountComponentAtNode(target);
      destroy();
    };
  }, []);

  useEffect(() => {
    if (!component || !target) return;
    ReactDOM.render(
    //   <ThemeProvider>{
      visible ? <ModalHandler component={component} onClose={onClose} /> : null
    //   }</ThemeProvider>,
      target
    );
  }, [visible]);

  return {
    open: () => setVisible(true),
    close: onClose,
    toggle: () => setVisible(!visible),
  };
};

export default useModal;
