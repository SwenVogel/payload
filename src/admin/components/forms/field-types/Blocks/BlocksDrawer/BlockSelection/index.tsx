import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { getTranslation } from '../../../../../../../utilities/getTranslation';
import DefaultBlockImage from '../../../../../graphics/DefaultBlockImage';
import { Props } from './types';

import './index.scss';

const baseClass = 'block-selection';

const BlockSelection: React.FC<Props> = (props) => {
  const {
    onClick,
    addRow,
    addRowIndex,
    block,
  } = props;

  const { i18n } = useTranslation();

  const {
    labels, slug, imageURL, imageAltText,
  } = block;

  const handleBlockSelection = useCallback(() => {
    addRow(addRowIndex, slug);
    if (typeof onClick === 'function') {
      onClick();
    }
  }, [onClick, addRow, addRowIndex, slug]);

  return (
    <button
      className={baseClass}
      tabIndex={0}
      type="button"
      onClick={handleBlockSelection}
    >
      <div className={`${baseClass}__image`}>
        {imageURL ? (
          <img
            src={imageURL}
            alt={imageAltText}
          />
        ) : <DefaultBlockImage />}
      </div>
      <div className={`${baseClass}__label`}>{getTranslation(labels.singular, i18n)}</div>
    </button>
  );
};

export default BlockSelection;
