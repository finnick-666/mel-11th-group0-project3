import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { color } from '../../../../styles';
import Edit from './components/Edit';
import Actions from '../Actions';


const Value = styled.span`
`;

const { primary, dangerous } = color;

const EditIcon = styled(EditOutlined)`
  color: ${primary};
`;

const DeleteIcon = styled(DeleteOutlined)`
  color: ${dangerous};
`;

class Option extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    const { item, selectRef, editing, setEditing, update, remove } = this.props;
    const { id, name } = item;

    return (
      <>
        {editing === id ? (
          <Edit
            item={item}
            selectRef={selectRef}
            onInputChange={this.handleInputChange}
            setEditing={setEditing}
            onClick={(e) => e.stopPropagation()}
            update={update}
          />
        ) : (
          <>
            <Value>
              {name}
            </Value>
            <Actions>
              <EditIcon onClick={(e) => {
                e.stopPropagation();
                setEditing(id);
              }}/>
              <DeleteIcon onClick={(e) => {
                e.stopPropagation();
                remove(item);
              }}/>
            </Actions>
          </>
        )}
      </>
    );
  }
}

export default Option;