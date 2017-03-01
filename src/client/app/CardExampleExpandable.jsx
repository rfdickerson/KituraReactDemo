
import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleExpandable = () => (
  <Card>
    <CardHeader
      title="Robert F. Dickerson"
      subtitle="Swift Developer"
      avatar="https://secure.gravatar.com/userimage/13166602/f8714e13426ac798e1dd9b89f714cfe3.jpg?size=200"
    />
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

export default CardExampleExpandable;