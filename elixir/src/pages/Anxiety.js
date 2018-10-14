import React, { Component } from 'react';
import bram from '../images/bram.jpg'
import jatamansi from '../images/jatamansi.jpg'
import shankhpushpi from '../images/shankhpushpi.jpg'
import './Page.css';

class Anxiety extends Component {
  render() {
    return (
      <div>
        <div className="article">
          <div class="article">
            <h1>Anxiety</h1>
          </div>
          <div class="paragraph">
            <h2>Here are some Home Remedies</h2>
              <ul>
                <li>Exercise</li>
                <li>Meditation</li>
                <li>Relaxation Techniques</li>
                <li>Writing</li>
                <li>Time management strategies</li>
                <li>Aromatherapy</li>
                <li>Cannabidiol oil</li>
                <li>Herbal Tea</li>
                <li>Herbal Medicine</li>
                <li>Time with animals</li>
              </ul>
              <h2>Ayurvedic Medicine for Anxiety and Panic Attacks</h2>
              <p>There are many Ayurvedic herbs that are best for treating depression and anxiety.
                These are beneficial for nerve strength. They work as a brain tonic in Ayurveda that helps in
                increasing your brain power and treats daily anxiety and stress in life. Some of the medicines
                are:</p>
              <ul>
                <li><strong>Brahmi:</strong> It means cosmic consciousness. It is a very beneficial herb as it helps in
                boosting your memory. Brahmi is the most recommended herb especially for children for their
                proper brain development. Brahmi is used as a treatment for anxiety, tension,
                and other nervous disorders. It is also useful for curing headaches.</li>
                <img class="pic" src={bram} alt="brahmi"/>
                <li><strong>Shankhpushpi:</strong> This is a well-known herb and nature’s answer
                to nervous weakness. This is the best medicine in Ayurvedic treatment
                for depression. It is used to increase mental powers and to sharpen
                intellect.</li>
                <img class="pic" src={jatamansi} alt="jatamansi"/>
                <li><strong>Jatamansi:</strong> The root of Jatamansi stabilizes mental conditions
                and serves as a wonderful brain tonic. It is an excellent restorative.
                Jatamansi helps in curing anxiety, depression, and other mental problems.</li>
                <img class="pic" src={shankhpushpi} alt="shankhpushpi"/>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Anxiety;
