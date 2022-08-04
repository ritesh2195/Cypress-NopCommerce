import HomePage from "../PageObject/HomePage"
import RegisterPage from "../PageObject/RegisterPage"
import CartPage from "../PageObject/CartPage"
import SearchPage from "../PageObject/SearchPage"
import LoginPage from "../PageObject/LoginPage"
import ProductDetailsPage from "../PageObject/ProductDetailsPage"
import MyAccount from "../PageObject/MyAccountPage"

class PageObjectManager{

    getHomePage(){

        return new HomePage()
    }

    getLoginPage(){

        return new LoginPage()
    }

    getSearchPage(){

        return new SearchPage()
    }

    getCartPage(){

        return new CartPage()
    }

    getMyAccountPage(){

        return new MyAccount()
    }

    getProductDetailsPage(){

        return new ProductDetailsPage()
    }

    getRegisterPage(){

        return new RegisterPage()
    }
}

export default PageObjectManager;