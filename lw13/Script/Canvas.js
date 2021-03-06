function DrawFirst() {
    const canvas = document.getElementById('FirstMan');
    const context = canvas.getContext('2d');

    //legs
    context.beginPath();
    context.moveTo(286, 272);
    context.lineTo(286, 360);
    context.lineTo(164, 360);
    context.lineTo(164, 272);
    context.closePath();
    context.lineWidth = 3;
    context.strokeStyle = "#3a74c5";
    context.fillStyle = "#3a74c5";
    context.fill();
    context.stroke();

    context.beginPath();
    context.ellipse(266, 363, 40, 8, Math.PI, 0, Math.PI);
    context.ellipse(184, 363, 40, 8, Math.PI, 0, Math.PI);
    context.closePath();
    context.fillStyle = "#000000";
    context.fill();

    //body
    context.beginPath();
    context.ellipse(294, 275, 50, 20, Math.PI / 2.65, 0, Math.PI * 2);
    context.ellipse(156, 275, 50, 20, -Math.PI / 2.65, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = "#d16e5e";
    context.fill();

    context.beginPath();
    context.ellipse(225, 330, 73, 20, Math.PI, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = "#d16e5e";
    context.fill();

    context.beginPath();
    context.moveTo(296, 242);
    context.lineTo(296, 330);
    context.lineTo(154, 330);
    context.lineTo(154, 242);
    context.closePath();
    context.lineWidth = 3;
    context.strokeStyle = "#d16e5e";
    context.fillStyle = "#d16e5e";
    context.fill();
    context.stroke();

    //cloth elements
    context.beginPath();
    context.moveTo(157, 300);
    context.lineTo(164, 275);
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = "#000000";
    context.stroke();

    context.beginPath();
    context.moveTo(292, 300);
    context.lineTo(285, 275);
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = "#000000";
    context.stroke();

    context.beginPath();
    context.moveTo(226, 257);
    context.lineTo(226, 350);
    context.closePath();
    context.lineWidth = 3;
    context.strokeStyle = "#000000";
    context.stroke();

    context.beginPath();
    context.ellipse(257, 245, 34, 8, Math.PI * 1.88, 0, Math.PI * 2);
    context.closePath();
    context.lineWidth = 0.2;
    context.strokeStyle = "#000000";
    context.fillStyle = "#ff1f3c";
    context.fill();
    context.stroke();

    context.beginPath();
    context.ellipse(196, 243, 32, 8, -Math.PI * 1.85, 0, Math.PI * 2);
    context.closePath();
    context.lineWidth = 0.2;
    context.strokeStyle = "#000000";
    context.fillStyle = "#ff1f3c";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(217, 270, 4, 0, Math.PI * 2);
    context.arc(217, 300, 4, 0, Math.PI * 2);
    context.arc(217, 330, 4, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = "#000000";
    context.fill();

    //hands
    context.beginPath();
    context.arc(304, 313, 18, 0, Math.PI * 2);
    context.arc(146, 313, 18, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = "#ff1f3c";
    context.fill();

    context.beginPath();
    context.arc(292, 307, 8, 0, Math.PI * 2);
    context.closePath();
    context.lineWidth = 0.5;
    context.strokeStyle = "#000000";
    context.fillStyle = "#ff1f3c";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(158, 307, 8, 0, Math.PI * 2);
    context.closePath();
    context.lineWidth = 0.5;
    context.strokeStyle = "#000000";
    context.fillStyle = "#ff1f3c";
    context.fill();
    context.stroke();

    //head
    context.beginPath();
    context.arc(225, 150, 100, 0, Math.PI * 2);
    context.closePath();
    context.strokeStyle = "#ffeabf";
    context.fillStyle = "#ffeabf";
    context.fill();

    //eyes
    context.beginPath();
    context.ellipse(255, 165, 30, 20, Math.PI / 4, 0, Math.PI * 2);
    context.ellipse(200, 165, 30, 20, -Math.PI / 4, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = "#ffffff";
    context.fill();

    context.beginPath();
    context.arc(210, 165, 5, 0, Math.PI * 2);
    context.arc(245, 165, 5, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = "#000000";
    context.fill();
    //mouth
    context.beginPath();
    context.moveTo(225, 240);
    context.lineTo(195, 210);
    context.lineTo(255, 210);
    context.closePath();
    context.fillStyle = "#312c30";
    context.fill();

    context.beginPath();
    context.moveTo(212, 212);
    context.lineTo(201, 212);
    context.lineTo(210, 220);
    context.lineTo(212, 220);
    context.closePath();
    context.fillStyle = "#ffffff";
    context.fill();

    context.beginPath();
    context.moveTo(238, 212);
    context.lineTo(249, 212);
    context.lineTo(240, 220);
    context.lineTo(238, 220);
    context.closePath();
    context.fillStyle = "#ffffff";
    context.fill();

    context.beginPath();
    context.moveTo(224, 212);
    context.lineTo(214, 212);
    context.lineTo(214, 220);
    context.lineTo(224, 218);
    context.closePath();
    context.fillStyle = "#ffffff";
    context.fill();

    context.beginPath();
    context.moveTo(226, 212);
    context.lineTo(236, 212);
    context.lineTo(236, 220);
    context.lineTo(226, 219);
    context.closePath();
    context.fillStyle = "#ffffff";
    context.fill();

    //red line
    context.beginPath();
    context.arc(225, 150, 100, Math.PI * 1.05, -Math.PI * 0.05);
    context.strokeStyle = "#ff1e40";
    context.fillStyle = "#ff1e40";
    context.fill();
    context.closePath();

    //hat
    context.beginPath();
    context.arc(225, 150, 100, Math.PI * 1.1, -Math.PI * 0.1);
    context.strokeStyle = "#3a74c5";
    context.fillStyle = "#3a74c5";
    context.fill();
    context.closePath();

    //brows
    context.beginPath();
    context.moveTo(255, 125);
    context.lineTo(280, 135);

    context.moveTo(200, 125);
    context.lineTo(175, 135);
    context.closePath();
    context.lineWidth = 3;
    context.strokeStyle = "#847a6e";
    context.stroke();

    //red star
    context.beginPath();
    context.moveTo(240, 65);
    context.lineTo(210, 35);

    context.moveTo(225, 70);
    context.lineTo(225, 30);

    context.moveTo(210, 65);
    context.lineTo(240, 35);

    context.moveTo(245, 50);
    context.lineTo(205, 50);
    context.closePath();
    context.lineWidth = 5;
    context.strokeStyle = "#ce253e";

    context.stroke();
}

function DrawSecond() {
    const canvas = document.getElementById('SecondMan');
    const context = canvas.getContext('2d');
    
    //legs
    context.beginPath();
    context.moveTo(686, 272);
    context.lineTo(686, 360);
    context.lineTo(564, 360);
    context.lineTo(564, 272);
    context.closePath();
    context.lineWidth = 3;
    context.strokeStyle = "#228580";
    context.fillStyle = "#228580";
    context.fill();
    context.stroke();

    context.beginPath();
    context.ellipse(666, 363, 40, 8, Math.PI, 0, Math.PI);
    context.ellipse(584, 363, 40, 8, Math.PI, 0, Math.PI);
    context.closePath();
    context.fillStyle = "#000000";
    context.fill();

    //body
    context.beginPath();
    context.ellipse(694, 275, 50, 20, Math.PI / 2.65, 0, Math.PI * 2);
    context.ellipse(556, 275, 50, 20, -Math.PI / 2.65, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = "#ff5f17";
    context.fill();

    context.beginPath();
    context.ellipse(625, 330, 73, 20, Math.PI, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = "#ff5f17";
    context.fill();

    context.beginPath();
    context.moveTo(696, 242);
    context.lineTo(696, 330);
    context.lineTo(554, 330);
    context.lineTo(554, 242);
    context.closePath();
    context.lineWidth = 3;
    context.strokeStyle = "#ff5f17";
    context.fillStyle = "#ff5f17";
    context.fill();
    context.stroke();

    //cloth elements
    context.beginPath();
    context.moveTo(557, 300);
    context.lineTo(564, 275);
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = "#000000";
    context.stroke();

    context.beginPath();
    context.moveTo(692, 300);
    context.lineTo(685, 275);
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = "#000000";
    context.stroke();

    context.beginPath();
    context.moveTo(626, 257);
    context.lineTo(626, 350);
    context.closePath();
    context.lineWidth = 3;
    context.strokeStyle = "#000000";
    context.stroke();

    context.beginPath();
    context.ellipse(657, 245, 34, 8, Math.PI * 1.88, 0, Math.PI * 2);
    context.closePath();
    context.lineWidth = 0.2;
    context.strokeStyle = "#000000";
    context.fillStyle = "#00ad50";
    context.fill();
    context.stroke();

    context.beginPath();
    context.ellipse(596, 243, 32, 8, -Math.PI * 1.85, 0, Math.PI * 2);
    context.closePath();
    context.lineWidth = 0.2;
    context.strokeStyle = "#000000";
    context.fillStyle = "#00ad50";
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(671, 280);
    context.lineTo(645, 280);
    context.lineTo(645, 310);
    context.lineTo(671, 310);
    context.lineTo(671, 280);
    context.lineTo(658, 293);
    context.lineTo(645, 280);
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = "#000000";
    context.stroke();

    context.beginPath();
    context.moveTo(607, 280);
    context.lineTo(581, 280);
    context.lineTo(581, 310);
    context.lineTo(607, 310);
    context.lineTo(607, 280);
    context.lineTo(594, 293);
    context.lineTo(581, 280);
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = "#000000";
    context.stroke();

    //hands
    context.beginPath();
    context.arc(704, 313, 18, 0, Math.PI * 2);
    context.arc(546, 313, 18, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = "#4ec33e";
    context.fill();

    context.beginPath();
    context.arc(692, 307, 8, 0, Math.PI * 2);
    context.closePath();
    context.lineWidth = 0.5;
    context.strokeStyle = "#000000";
    context.fillStyle = "#4ec33e";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(558, 307, 8, 0, Math.PI * 2);
    context.closePath();
    context.lineWidth = 0.5;
    context.strokeStyle = "#000000";
    context.fillStyle = "#4ec33e";
    context.fill();
    context.stroke();

    //head
    context.beginPath();
    context.arc(625, 150, 100, 0, Math.PI * 2);
    context.closePath();
    context.strokeStyle = "#ffeabf";
    context.fillStyle = "#ffeabf";
    context.fill();

    //eyes
    context.beginPath();
    context.ellipse(655, 165, 30, 20, Math.PI / 4, 0, Math.PI * 2);
    context.ellipse(600, 165, 30, 20, -Math.PI / 4, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = "#ffffff";
    context.fill();

    context.beginPath();
    context.arc(610, 165, 5, 0, Math.PI * 2);
    context.arc(645, 165, 5, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = "#000000";
    context.fill();
    //mouth
    context.beginPath();
    context.moveTo(625, 240);
    context.lineTo(595, 210);
    context.lineTo(655, 210);
    context.closePath();
    context.fillStyle = "#312c30";
    context.fill();

    context.beginPath();
    context.moveTo(612, 212);
    context.lineTo(601, 212);
    context.lineTo(610, 220);
    context.lineTo(612, 220);
    context.closePath();
    context.fillStyle = "#ffffff";
    context.fill();

    context.beginPath();
    context.moveTo(638, 212);
    context.lineTo(649, 212);
    context.lineTo(640, 220);
    context.lineTo(638, 220);
    context.closePath();
    context.fillStyle = "#ffffff";
    context.fill();

    context.beginPath();
    context.moveTo(624, 212);
    context.lineTo(614, 212);
    context.lineTo(614, 220);
    context.lineTo(624, 218);
    context.closePath();
    context.fillStyle = "#ffffff";
    context.fill();

    context.beginPath();
    context.moveTo(626, 212);
    context.lineTo(636, 212);
    context.lineTo(636, 220);
    context.lineTo(626, 219);
    context.closePath();
    context.fillStyle = "#ffffff";
    context.fill();

    //hat
    context.beginPath();
    context.moveTo(725, 50);
    context.lineTo(725, 120);
    context.lineTo(525, 120);
    context.lineTo(525, 50);
    context.closePath();
    context.strokeStyle = "#50c53e";
    context.fillStyle = "#50c53e";
    context.fill();

    context.beginPath();
    context.moveTo(705, 30);
    context.lineTo(705, 60);
    context.lineTo(545, 60);
    context.lineTo(545, 30);
    context.closePath();
    context.strokeStyle = "#50c53e";
    context.fillStyle = "#50c53e";
    context.fill();

    context.beginPath();
    context.arc(705, 50, 20, 0, Math.PI * 2);
    context.arc(545, 50, 20, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = "#50c53e";
    context.fill();

    context.beginPath();
    context.ellipse(735, 155, 55, 18, Math.PI / 2.7, 0, Math.PI * 2);
    context.closePath();
    context.lineWidth = 0.4;
    context.strokeStyle = "#000000";
    context.stroke();
    context.fillStyle = "#50c53e";
    context.fill();

    context.beginPath();
    context.ellipse(515, 155, 55, 18, -Math.PI / 2.7, 0, Math.PI * 2);
    context.closePath();
    context.lineWidth = 0.4;
    context.strokeStyle = "#000000";
    context.stroke();
    context.fillStyle = "#50c53e";
    context.fill();

    context.beginPath();
    context.moveTo(715, 70);
    context.lineTo(715, 130);
    context.lineTo(535, 130);
    context.lineTo(535, 70);
    context.closePath();
    context.strokeStyle = "#00ad51";
    context.fillStyle = "#00ad51";
    context.fill();
    context.stroke();

    //brows
    context.beginPath();
    context.moveTo(655, 125);
    context.lineTo(680, 135);

    context.moveTo(600, 125);
    context.lineTo(575, 135);
    context.closePath();
    context.lineWidth = 3;
    context.strokeStyle = "#847a6e";
    context.stroke();
}

window.onload = () => {
    DrawFirst();
    DrawSecond();
}