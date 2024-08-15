import { Button, Image } from "antd";
import { Link } from "react-router-dom";
import mainBcg from "../../entities/main/main-bcg.jpg";
// import mainBcg from "@/entities/main/main-bcg.jpg";


const Main = () => {
    return (


        <div className="flex items-center flex-col justify-center h-svh">
            <Image src={mainBcg} />
            <div className="main-bcg__info-block-top red">
                Откройте для себя новых независимых исполнителей
            </div>

            <Button>
                <Link to="/" className="main-bcg__info-block-middle">
                    Начать
                </Link>
            </Button>


            <div className="main-bcg__info-block-bottom">
                Используется Jamendo music API
            </div>
        </div>
    );
};

export default Main;