// src/theme/DocPage/index.js
import React from 'react';
import DocPage from '@theme-original/DocPage';

export default function DocPageWrapper(props) {
  // Vérifiez le contexte pour n'afficher la sidebar que sur les pages où c'est nécessaire
  if (props.content.metadata.id === 'guide-utilisation') {
    return (
      <div>
        <props.content />
      </div>
    );
  }

  return <DocPage {...props} />;
}
