import React, { Component } from 'react';
import berry from '../images/gooseberry.png'
import neem from '../images/neem.jpg'
import './Page.css';

class Acne extends Component {
  render() {
    return (
      <div>
        <div className="article">

          <div class="article">
            <h1>Acne</h1>
          </div>

          <div class="paragraph">

          <p>Acne can be highly stubborn and distressing. The pimples can not only be painful but also leave behind ugly scars.
            It is very important to make smart choices especially when skin is concerned.
            Ayurveda provides abundant holistic and natural ways to fight various skin problems and keep your skin healthy.
            The age old methodologies of Ayurveda goes beyond conventional approaches to find answer to the disorder and treat it away from its roots.</p>

            <h2>Some of the general reasons for acne development include:</h2>

            <ul>
              <li>Oily skin</li>
              <li>Dead skin cells</li>
              <li>Clogged pore</li>
              <li>Bacteria/ Infection</li>
            </ul>

            <h2>Here we are providing you 10 simple, effective beauty tips for pimples that will help you achieve clear, lovely and gorgeous skin.</h2>

            <ol>
              <li><strong>BASIL OR TULSI</strong></li>
              <p>Tulsi is considered sacred in Ayurveda for its wonderful healing properties and,
              is one of the best herb to treat acne, pimples and blemishes naturally.
              Crush some fresh and clean tulsi leaves, take out its juice and massage it on your face.
              Let the face absorb the juice of 15-20 minutes and rinse off.</p>
              <li><strong>INDIAN GOOSEBERRY OR AMLA</strong></li>
              <p>Amla is known as elixir for your skin and removes excess sebum,
              fights acne causing bacteria and prevents scare. Make a paste of amla and apply on your face.
              Wash it off after 15-20 minutes.</p>
              <img class="pic" src={berry} alt="berry"/>
              <li><strong>HONEY</strong></li>
              <p>Honey is a miraculous natural ingredient with numerous benefits, and the treatment of acne and
              pimples is one of them. Apply a few drops of raw on the pimples or the scars and rinse off after
              5-10 minutes. Repeat regularly for best results.</p>
              <li><strong>TURMERIC</strong></li>
              <p>Turmeric is an antibacterial and anti-fungal Ayurvedic remedy to prevent bacterial breakouts
              and pimples. It is also anti-allergic and cleanse toxins from the pores. Make a paste of turmeric
              powder with water and apply on the skin. Once dry, rinse off and pat dry. You can replace water with
              honey for dry skin.</p>
              <li><strong>NEEM LEAVES</strong></li>
              <p>Neem leaves are the perfect and most popular Ayurvedic remedy for treating pimples.
              Apply neem paste on the affected area, leave it on until dry, rinse with water and pat dry.
              Make neem leaf paste by boiling and crushing 10 leaves.</p>
              <img class="pic" src={neem} alt="neem"/>
              <li><strong>LEMON</strong></li>
              <p>The acid in the lemon juice has acne fighting qualities and is also one of the most easy
              and cheap way to clear your skin. Apply lemon juice directly to the pimple overnight. It not
              only cures pimple but protects your skin too.</p>
              <li><strong>TRIPHALA</strong></li>
              <p>Triphala is a popular Ayurvedic remedy for skin.
              It balances the tridosha (vata, pitta and kapha), detoxifies the whole body,
              fights against bad bacteria and helps in your acne healing. Take 1 tsp. of triphala with
              hot water on empty stomach every morning.</p>

              <li><strong>WHITE GOURD OR LAUKI</strong></li>
              <p>Lauki juice is extremely beneficial as its high water content will keep body cool and skin healthy.
              It cleanses your body system within, prevents pimples and gives a smooth and beautiful skin. Take a lauki,
              pee of the outer skin, wash it thoroughly. Cut the lauki into small pieces and put it into the blender.
              Extract the juice, add a pinch of salt and drink it.</p>
              <li><strong>POTATO</strong></li>
              <p>Potatoes are useful in treating acne, fights off bacteria and also gives a natural glow to the skin.
              Slice thin disks from a potato and massage your face gently with it.
              Make sure to use a different piece of potato disk on different parts of you face to avoid
              spreading of bacteria.</p>
              <li><strong>PAPAYA</strong></li>
              <p>Papaya is a great Ayurvedic remedy for acne and pimples.
              Wash your face, pat dry and apply papaya paste on your face.
              Leave the mask on for 20-20 minutes and rinse off with warm water. Repeat daily.</p>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Acne;
