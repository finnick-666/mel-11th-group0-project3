import React from 'react';
import { Row, Col, Statistic, Spin } from 'antd';
import styled from 'styled-components';
import Modal from '../../../../components/Modal';
import NewItemModal from '../NewItemModal';
import Header from './components/Header';
import DescriptionList from '../../../../components/DescriptionList';
import fields from '../../fields';
import { color } from '../../../../styles';

const ModalSpin = styled(Spin).attrs({
  size: 'large',
})`
  width: 100%;
  height: 60vh;
`;

const Meta = styled(Col).attrs({ span: 24, md: 18 })`
`;

const Stock = styled(Col).attrs({ span: 24, md: 6 })`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-between;
  background-color: ${color.lightGrey};
`;

class ItemDetailModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      editing: false,
    };
  }

  async componentDidUpdate(prevProps) {
    this.setLoading(prevProps);
  }

  setLoading(prevProps) {
    const { data, visible } = this.props;

    if(!!data && data != prevProps.data){
      this.setState({ loading: false });
    }

    if(!!visible && !prevProps.visible) {
      this.setState({ loading: true });
    }
  }

  render() {
    const { data, onCancel, ...modalProps } = this.props;
    const { loading, editing } = this.state;
		// const { sku, upc, name, description, category, brand, manufacturer, costPrice, sellingPrice, applyGst} = this.state.descriptionData;

    return (
      <Modal
        title={<Header onEditButtonClick={()=> this.setState({ editing: true })} loading={loading} />}
        footer={null}
        onCancel={onCancel}
        width={1000}
        {...modalProps}   
      >
        {loading ? (
          <ModalSpin></ModalSpin>
        ) : (
          <Row>
            <Meta>
              <DescriptionList
                data={Object.keys(data)
                  .filter((key) =>  fields[key].inDetails && !!data[key])
                  .map((key) => ({
                    title: fields[key].title || fields[key].label,
                    value: data[key]
                  }))
                }
              />
            </Meta>
            <Stock>
              <Statistic
                title="Accounting Stock"
                value={data.physicalStock + data.arrivingQuantity - data.lockedStock}
                style={{ textAlign: "center" }}
              />
              <Statistic
                title="Physical Stock"
                value={data.physicalStock}
                style={{ textAlign: "center" }}
              />
              <Statistic
                title="Locked Stock"
                value={data.lockedStock}
                style={{ textAlign: "center" }}
              />
            </Stock>
          </Row>
        )}
        <NewItemModal
          visible={editing}
          initialData={data}
          onCancel={()=>this.setState({editing:false})}
        />
      </Modal>
    );
  }
}

export default ItemDetailModal;
