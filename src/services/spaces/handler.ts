import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { v4 } from "uuid";
import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({});

async function handler(event: APIGatewayProxyEvent, context: Context) {
  
  const command = new ListBucketsCommand({});
  const listBucketsResult = (await s3Client.send(command)).Buckets;
  
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(`Hello World from lambda, here are your buckets ${JSON.stringify(listBucketsResult)} + UUID:`+ v4()),
  }

  console.log(event);
  return response;
}

export {handler}

