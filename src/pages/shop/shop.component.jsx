import React, { Component } from "react";

// Shop Data
import SHOP_DATA from "./shop.data";

// Components
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <h1>Kings' Collection</h1>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
