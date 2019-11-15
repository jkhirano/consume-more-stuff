import React, { Component } from "react";
import Habit from "../../components/Habit";
// import styles from './HabitList.module.css';
import { connect } from "react-redux";
import DetailedHabit from "../../components/DetailedHabit";
import ThumbnailHabit from "../../components/ThumbnailHabit";
import { loadDetailAsync } from "../../actions";
import { actionsGetThumbnail } from "../../actions";
import "./HabitList.css";

class HabitList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <ul>
        {this.props.habits.map(habit => {
          return (
            <Habit
              key={habit.id}
              id={habit.id}
              name={habit.name}
              category={habit.category}
            />
          );
        })}
      </ul>
    );
  }
}

export default HabitList;

// import React, { Component } from "react";
// // import styles from './HabitList.module.css';
// import { connect } from "react-redux";
// import DetailedHabit from "../../components/DetailedHabit";
// import ThumbnailHabit from "../../components/ThumbnailHabit";
// import { loadDetailAsync } from "../../actions";
// import { actionsGetThumbnail } from "../../actions";
// import "./HabitList.css";

// class HabitList extends Component {
//   constructor(props) {
//     super(props);

//     // extra storage
//     this.state = {};
//   }

//   componentDidMount() {
//     this.props.getThumbnail("all");
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.display !== prevProps.display) {
//       this.props.getThumbnail(this.props.display);
//     }
//   }

//   changeDetailedId = id => {
//     this.props.loadDetailAsync(id);
//   };

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.localHabits.map(element => {
//             return (
//               <div className="habitList">
//                 <ThumbnailHabit
//                   key={element.id}
//                   habit={element}
//                   changeDetailedId={this.changeDetailedId}
//                 />
//               </div>
//             );
//           })}
//         </ul>

//         <div>
//           <DetailedHabit
//             name={this.props.name}
//             description={this.props.description}
//             price={this.props.price}
//             manufacturer={this.props.manufacturer}
//             model={this.props.model}
//             dimensions={this.props.dimensions}
//             view_count={this.props.view_count}
//             email={this.props.email}
//             category={this.props.category}
//             condition={this.props.condition}
//             status={this.props.status}
//             created_at={this.props.created_at}
//             updated_at={this.props.updated_at}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     localHabits: state.habits,
//     name: state.name,
//     description: state.description,
//     price: state.price,
//     manufacturer: state.manufacturer,
//     model: state.model,
//     dimensions: state.dimensions,
//     view_count: state.view_count,
//     email: state.user.email,
//     category: state.category.category,
//     condition: state.condition.condition,
//     status: state.status.status,
//     created_at: state.created_at,
//     updated_at: state.updated_at,
//     display: state.display
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     loadDetailAsync: id => {
//       return dispatch(loadDetailAsync(id));
//     },
//     getThumbnail: category => {
//       return dispatch(actionsGetThumbnail(category)); // dispatches getThumbnail in actions/index.js
//     }
//   };
// };

// HabitList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HabitList);

// export default HabitList;
