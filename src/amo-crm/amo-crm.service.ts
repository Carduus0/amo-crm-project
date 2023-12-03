import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AmoCrmService {
  private readonly apiUrl = 'https://scarduus.amocrm.ru/api/v4/leads';
  private readonly accessToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRhMTU1ZDM5ODkzM2RhOTY1ZDA1NTJkZTAzNzFhN2Q5YmI0YmE1YzNhYmNmOTJmNDBmNzI3NjRmN2M5ZWQ2MDllMjM5NDM4OTBiMDYzMGRiIn0.eyJhdWQiOiI3ZTU2MzViOS1mN2MwLTQ3Y2QtOTUzNy1iNDNhYTk1OTMxZGYiLCJqdGkiOiI0YTE1NWQzOTg5MzNkYTk2NWQwNTUyZGUwMzcxYTdkOWJiNGJhNWMzYWJjZjkyZjQwZjcyNzY0ZjdjOWVkNjA5ZTIzOTQzODkwYjA2MzBkYiIsImlhdCI6MTcwMTYxMTc4NywibmJmIjoxNzAxNjExNzg3LCJleHAiOjE3MDE2OTgxODcsInN1YiI6IjEwMzkyMzY2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNDMxOTkwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXX0.lTbw08j7WL8vx2XoPXoyol0ZQzK6kkCM4FxhXcYVQ7UgfkFnfWIDZNUhiTlR9oAKJvi3ggx5_7gKCDruOP0ZhLYlLmWVqcM1tlFF92z0ybXUA4Pvxz-Yo4RS1Gx8leoSmdeoDt0O9pLpnO2VCdF4lcwzfpe-QLmP6dMxvt8Fo6ne0mSsTK_C5I3A39f9a1uo7hOpkQ_bjMYKqX83F79AlHvD_XSivNniWLbT7p0TMm9gKDfTEE0Z-DArehko0YcQUBeXyew8HsKjV6sd0hyoUssfSAZXdE2z_WOs97_eHsvdPNterZc8-tBhVRUAt2CmLXN1zvhblwXe5vBg4bLA-A';

  async getLeads(): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch leads from AmoCRM',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
