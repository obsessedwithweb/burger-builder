import React, { Component, Fragment } from "react";
import axiosOrders from "../../axios-orders";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.3,
  bacon: 0.7,
  meat: 1.5,
};

class BurgerBuilder extends Component {
  state = {
    ingredient: undefined,
    totalPrice: 4,
    isOrdering: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axiosOrders.get("https://react-burger-builder-a7633-default-rtdb.europe-west1.firebasedatabase.app/ingredient.json")
      .then((response) => {
        this.setState({ ingredient: response.data });
        console.log(this.state.ingredient)
        console.log(response.data)
      }).catch(error => {
        this.setState({ error: true })
      })
  }

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

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredient: this.state.ingredient,
      price: this.state.totalPrice,
      client: {
        name: "Name",
        age: "hisAge",
        address: {
          street: "Street",
          zipCode: "ZipCode",
          country: "Country",
        },
      },
    };
    axiosOrders
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        console.log(response)
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
  };

  render() {
    const disableInfo = {
      ...this.state.ingredient,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can not be loaded!</p> : <Spinner />;
    if (this.state.ingredient) {
      burger = (
        <Fragment>
          <Burger ingredient={this.state.ingredient} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disableInfo}
            price={this.state.totalPrice}
            ordered={this.orderingHandler}
            //!! if true, the button will be disabled "can't order"
            canOrder={this.state.totalPrice == 4 ? true : false}
          />
        </Fragment>
      );
      orderSummary = (
        <OrderSummary
          cancel={this.cancelOrderHnadler}
          checkout={this.purchaseContinueHandler}
          ingredients={this.state.ingredient}
          price={this.state.totalPrice}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }


    return (
      <Fragment>
        <Modal
          show={this.state.isOrdering}
          modalClosed={this.cancelOrderHnadler}>
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}
export default withErrorHandler(BurgerBuilder, axiosOrders);
