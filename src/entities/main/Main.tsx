import { Button } from "antd";
import { memo } from "react";
import { Link } from "react-router-dom";

const Main = memo(() => {
    return (
        <div style={{
            backgroundImage: `url(https://i.etsystatic.com/35092126/r/il/26f5d7/3863487113/il_570xN.3863487113_hg2v.jpg)`,
        }}>
            <div className="bg-black bg-opacity-70">

                <div className="flex items-center flex-col justify-center h-svh text-white gap-6 text-3xl">
                    <span>
                        Откройте для себя новых независимых исполнителей
                    </span>

                    <Button size="large" type="primary">
                        <Link to="/home" className="text-xl">
                            Начать
                        </Link>
                    </Button>

                    <span className="text-lg">
                        Используется Jamendo music API
                    </span>
                </div>
            </div>
        </div>
    );
});

export default Main;