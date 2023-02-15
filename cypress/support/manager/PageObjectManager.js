import HomePage from "../PageObjects/HomePage"
import RegisterPage from "../PageObjects/RegisterPage"
import CartPage from '../PageObjects/CartPage'
import SearchPage from "../PageObjects/SearchPage"
import LoginPage from "../PageObjects/LoginPage"
import ProductDetailsPage from "../PageObjects/ProductDetailsPage"
import MyAccount from "../PageObjects/MyAccountPage"

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