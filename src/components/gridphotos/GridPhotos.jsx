import React from 'react';
import Image from 'next/image';
import Box from '../atoms/box/Box';
import Button from '../button/button';

function GridPhotos() {
  return (
    <Box direction="column" justify="center" align="center" margin="32px auto">
      <container className="container1">
        <div>
          <Image style={{ paddingTop: '56px' }} alt="" src="/static/images/foto1.png" width="815px" height="841px" />
        </div>

        <container>
          <div className="container2">
            <Image alt="" src="/static/images/foto2.png" width="576px" height="390px" />
          </div>
          <div className="container3">
            <Image alt="" src="/static/images/foto3.png" width="545px" height="426px" />
          </div>
        </container>

      </container>

      <container className="container4">

        <div>
          <Image alt="" src="/static/images/foto4.png" width="816px" height="415px" />
        </div>

        <div>
          <Image alt="" src="/static/images/foto5.png" width="576px" height="422px" />
        </div>
      </container>

      <container className="container5">
        <div>
          <Image alt="" src="/static/images/foto6.png" width="1320px" height="572.24px" />
        </div>
      </container>

      <container className="container6">
        <div>
          <Image alt="" src="/static/images/foto7.png" width="696px" height="517px" />
        </div>

        <div>
          <Image alt="" src="/static/images/foto8.png" width="696px" height="517px" />
        </div>
      </container>

      <container className="container7">
        <div>
          <Image alt="" src="/static/images/foto9.png" width="936px" height="510px" />
        </div>

        <div>
          <Image alt="" src="/static/images/foto10.png" width="456px" height="510px" />
        </div>

      </container>
      <container className="container8">
        <div>
          <Image alt="" src="/static/images/foto11.png" width="1320px" height="502px" />
        </div>

      </container>

      <Button margin="32px auto" href="/depoimentos" justify="center" width="200px" height="56px" color="black" text="Depoimentos" />
    </Box>
  );
}

export default GridPhotos;
