import React, { Component, Fragment } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.3,
  bacon: 0.7,
  meat: 1.5,
};

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 4,
    isOrdering: false,
  };

  addIngredientHandler = (type) => {
    this.setState((prevState) => ({
      ingredient: {
        ...prevState.ingredient,
        [type]: prevState.ingredient[type] + 1,
      },
      totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
    }));
  };

  removeIngredientHandler = (type) => {
    this.setState((prevState) => ({
      ingredient: {
        ...prevState.ingredient,
        [type]:
          prevState.ingredient[type] > 0 ? prevState.ingredient[type] - 1 : 0,
      },
      totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
    }));
  };

  orderingHandler = () => {
    this.setState({ isOrdering: true });
  };

  cancelOrderHnadler = () => {
    this.setState({ isOrdering: false });
  };

  render() {
    const disableInfo = {
      ...this.state.ingredient,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <Fragment>
        <Modal
          show={this.state.isOrdering}
          modalClosed={this.cancelOrderHnadler}>
          <OrderSummary
            cancel={this.cancelOrderHnadler}
            checkout={null}
            ingredients={this.state.ingredient}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredient={this.state.ingredient} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          ordered={this.orderingHandler}
          canOrder={this.state.totalPrice == 4 ? true : false}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
