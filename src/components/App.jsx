import React, { Component, PropTypes } from 'react/addons';
import Diagram from './Diagram';
import Topic from './Topic';
import styles from './App.scss';

export default class App extends Component {

  constructor(props) {
    super(props);

    var topicState = {};
    const addTopicTitlesToTopicObj = (topic) => {
      topicState[topic.title] = {
        highlighted: false,
        collapsed: true
      }
    };

    const walkTopicTree = (topic) => {
      addTopicTitlesToTopicObj(topic);
      if (topic.children) {
        topic.children.map(walkTopicTree);
      }
    }

    for (let topic of props.topics) {
      walkTopicTree(topic);
    }

    this.state = {
      topics: topicState
    };

    this.topicUnderMouseChanged = this.topicUnderMouseChanged.bind(this);
    this.topicClicked = this.topicClicked.bind(this);
  }

  topicUnderMouseChanged(topicTitle, isUnderMouse) {
    const nextState = React.addons.update(this.state, {
      topics: {
        [topicTitle]: {
          highlighted: { $set: isUnderMouse }
        }
      }
    });
    this.setState(nextState);
  };

  topicClicked(topicTitle) {
    const collapsed = this.state.topics[topicTitle].collapsed;
    const nextState = React.addons.update(this.state, {
      topics: {
        [topicTitle]: {
          collapsed: { $set: !collapsed }
        }
      }
    });
    this.setState(nextState);
  }

  render() {

    const { topics } = this.props;
    const topicState = this.state.topics;

    const makeDiagram = (topic) => {
      return (
        <svg key={topic.title} width={topic.width} height={topic.height} viewBox={`0 0 ${topic.width} ${topic.height}`}>
          <Diagram topic={topic} />
        </svg>
      );
    }

    const makeTopic = (topic) => {
      return <Topic topic={topic} key={topic.title} />;
    }

    const injectHighlightAndCallback = (topic) => {
      return Object.assign(
        topic,
        { highlighted: topicState[topic.title].highlighted },
        { collapsed: topicState[topic.title].collapsed },
        { underMouseChanged: this.topicUnderMouseChanged },
        { topicClicked: this.topicClicked },
        { children: topic.children ? topic.children.map(injectHighlightAndCallback) : topic.children }
      );
    };

    const topicsWithExtras = topics.map(injectHighlightAndCallback);

    return (
      <div className={styles.root}>
        <div className={styles.diagram}>
          { topicsWithExtras.map(makeDiagram) }
        </div>
        <ul className={styles.glossary}>
          <div className={styles.intro}>
            <h1>Визуальная схема фреймворка Relay</h1>
            <p>Relay - это новый фреймворк от Facebook, который позволяет упростить проблему передачи данных, но эта проблема сама по себе не проста в понимании <a href="docs/why-relay.html">(поэтому мы сделали тут визуализацию)</a>.</p>
            <p>Как правило, информация лучше усваивается на визуализационных примерах, так что я сделал эту интерактивную схему, которая может объяснить, каким образом различные части Relay взаимодействуют друг с другу.</p>
          </div>
          { topicsWithExtras.map(makeTopic) }
        </ul>
        <div className={styles.credit}>Created by <a href="http://gwil.co">Sam Gwilym</a> &bull; <a href="https://github.com/sgwilym/relay-visual-learners">Github Repo</a></div>
      </div>
    );
  }
}

App.propTypes = {
  topics: PropTypes.array.isRequired
}
