import React, { Component } from "react";
import axios from "axios";

import { Card2 } from "../component/Card";
import Header from "../component/Header";
import { WithRouter } from "../Utills/Navigations";

class HomePage extends Component {
  state = {
    title: "-",
    content: "",
    page: 1,
    datas: [],
    information: {},
    loading: false,
  };

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true });
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const { results } = response.data;
        if (results) {
          this.setState({ datas: results });
        }
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  async fetchData2() {
    this.setState({ loading: true });
    var config = {
      method: "get",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then((response) => {
        const { results } = response.data;
        console.log(results);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <>
        <Header />
        <div className="w-full h-screen">
          <p>{this.state.content}</p>
          <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
            {this.state.datas.map((data) => (
              <Card2
                key={data.id}
                title={data.title}
                image={data.poster_path}
                votes={data.vote_average}
                navigate={`/detail/${data.id}`}
                onClicl={() => this.props.navigate(`/detail/${data.id}`)}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default WithRouter(HomePage);
