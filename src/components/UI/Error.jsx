import React from 'react';
import { Alert } from 'react-bootstrap'; // Importamos el componente Alert de Bootstrap

const Error = ({ message, onClose }) => {
  return (
    <Alert variant="danger" onClose={onClose} dismissible>
      <Alert.Heading>Error</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

export default Error;