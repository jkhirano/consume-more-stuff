import React, { Component } from "react";
import styles from "./HabitList.module.css";
import { connect } from "react-redux";
import DetailedHabit from "../../components/DetailedHabit";
import ThumbnailHabit from "../../components/ThumbnailHabit";
import { loadDetailAsync } from "../../actions";
import { actionsGetThumbnail } from "../../actions";
import { actionsToggle } from "../../actions";

class HabitList extends Component {
  constructor(props) {
    super(props);

    // extra storage
    this.state = {};
  }

  componentDidMount() {
    this.props.getThumbnail("all");
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.display !== prevProps.display &&
      this.props.display !== "add" &&
      this.props.display !== "detailed"
    ) {
      this.props.getThumbnail(this.props.display);
    }
  }

  changeDetailedId = id => {
    this.props.loadDetailAsync(id);
    return this.handleDetailedClick();
  };

  handleDetailedClick = () => {
    this.props.toggle("detailed");
  };

  render() {
    return (
      <div>
        <div>
          {this.props.display === "all" ? (
            <>
              <h3 className={styles.sectionName}>Hygiene</h3>
              <ul>
                {this.props.localHabits.map(element => {
                  return (
                    <div className={styles.habitList}>
                      <ThumbnailHabit
                        key={element.id}
                        habit={element}
                        changeDetailedId={this.changeDetailedId}
                      />
                    </div>
                  );
                })}
              </ul>
              <h3 className={styles.sectionName}>Work</h3>
              <ul>
                {this.props.localHabits.map(element => {
                  if (element.category.category === "Work") {
                    return (
                      <div className={styles.habitList}>
                        <ThumbnailHabit
                          key={element.id}
                          habit={element}
                          changeDetailedId={this.changeDetailedId}
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </ul>
              <h3 className={styles.sectionName}>Social</h3>
              <ul>
                {this.props.localHabits.map(element => {
                  if (element.category.category === "Social") {
                    return (
                      <div className={styles.habitList}>
                        <ThumbnailHabit
                          key={element.id}
                          habit={element}
                          changeDetailedId={this.changeDetailedId}
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </ul>
              <h3 className={styles.sectionName}>Home</h3>
              <ul>
                {this.props.localHabits.map(element => {
                  if (element.category.category === "Home") {
                    return (
                      <div className={styles.habitList}>
                        <ThumbnailHabit
                          key={element.id}
                          habit={element}
                          changeDetailedId={this.changeDetailedId}
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </ul>
            </>
          ) : (
            <ul>
              {this.props.localHabits.map(element => {
                return (
                  <div className={styles.habitList}>
                    <ThumbnailHabit
                      key={element.id}
                      habit={element}
                      changeDetailedId={this.changeDetailedId}
                    />
                  </div>
                );
              })}
            </ul>
          )}
        </div>

        <div>
          <DetailedHabit
            id={this.props.id}
            name={this.props.name}
            description={this.props.description}
            price={this.props.price}
            manufacturer={this.props.manufacturer}
            model={this.props.model}
            dimensions={this.props.dimensions}
            view_count={this.props.view_count}
            email={this.props.email}
            category={this.props.category}
            condition={this.props.condition}
            status={this.props.status}
            created_at={this.props.created_at}
            updated_at={this.props.updated_at}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    localHabits: state.habits,
    id: state.id,
    name: state.name,
    description: state.description,
    price: state.price,
    manufacturer: state.manufacturer,
    model: state.model,
    dimensions: state.dimensions,
    view_count: state.view_count,
    email: state.user.email,
    category: state.category.category,
    condition: state.condition.condition,
    status: state.status.status,
    created_at: state.created_at,
    updated_at: state.updated_at,
    display: state.display
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadDetailAsync: id => {
      return dispatch(loadDetailAsync(id));
    },
    getThumbnail: category => {
      return dispatch(actionsGetThumbnail(category));
    },
    toggle: link => {
      return dispatch(actionsToggle(link));
    }
  };
};

HabitList = connect(mapStateToProps, mapDispatchToProps)(HabitList);

export default HabitList;
